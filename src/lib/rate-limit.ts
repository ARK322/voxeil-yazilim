import type { NextRequest } from "next/server";
import {
  evaluateRateLimit,
  pruneTimestamps,
  type RateLimitConfig,
  type RateLimitResult,
} from "@/lib/rate-limit-shared";

export type { RateLimitResult } from "@/lib/rate-limit-shared";
export { formatRetryAfter } from "@/lib/rate-limit-shared";

/** /api/* POST için varsayılan limit */
export const DEFAULT_API_RATE_LIMIT: RateLimitConfig = {
  maxPerHour: 30,
  minIntervalMs: 2 * 1000,
  windowMs: 60 * 60 * 1000,
};

/** Route bazlı limitler — en spesifik eşleşme kazanır. */
export const API_RATE_LIMIT_RULES: ReadonlyArray<{
  prefix: string;
  config: RateLimitConfig;
}> = [
  {
    prefix: "/api/contact",
    config: {
      maxPerHour: 10,
      minIntervalMs: 60 * 1000,
      windowMs: 60 * 60 * 1000,
    },
  },
];

type IpRecord = {
  timestamps: number[];
};

const ipRecords = new Map<string, IpRecord>();

function findRule(pathname: string) {
  return [...API_RATE_LIMIT_RULES]
    .sort((a, b) => b.prefix.length - a.prefix.length)
    .find(({ prefix }) => pathname.startsWith(prefix));
}

export function getClientIp(request: NextRequest | Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

export function getRateLimitConfig(pathname: string): RateLimitConfig | null {
  if (!pathname.startsWith("/api/")) {
    return null;
  }

  return findRule(pathname)?.config ?? DEFAULT_API_RATE_LIMIT;
}

function buildRecordKey(ip: string, pathname: string) {
  const rule = findRule(pathname);
  return `${ip}:${rule?.prefix ?? "/api"}`;
}

export function checkPostRateLimit(
  request: NextRequest,
  now = Date.now(),
): RateLimitResult {
  const pathname = request.nextUrl.pathname;
  const config = getRateLimitConfig(pathname);

  if (!config || request.method !== "POST") {
    return { allowed: true };
  }

  const ip = getClientIp(request);
  const key = buildRecordKey(ip, pathname);
  const record = ipRecords.get(key) ?? { timestamps: [] };
  const pruned = pruneTimestamps(record.timestamps, config.windowMs, now);
  const result = evaluateRateLimit(pruned, config, now);

  if (!result.allowed) {
    return result;
  }

  pruned.push(now);
  ipRecords.set(key, { timestamps: pruned });

  if (ipRecords.size > 5000) {
    for (const [entryKey, value] of ipRecords) {
      if (value.timestamps.every((ts) => ts <= now - DEFAULT_API_RATE_LIMIT.windowMs)) {
        ipRecords.delete(entryKey);
      }
    }
  }

  return { allowed: true };
}
