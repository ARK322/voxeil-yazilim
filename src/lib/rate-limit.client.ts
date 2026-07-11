import {
  evaluateRateLimit,
  formatRetryAfter,
  pruneTimestamps,
  type RateLimitConfig,
} from "@/lib/rate-limit-shared";

const CLIENT_RATE_LIMIT: RateLimitConfig & { storageKey: string } = {
  storageKey: "voxeil_contact_submissions",
  maxPerHour: 3,
  minIntervalMs: 2 * 60 * 1000,
  windowMs: 60 * 60 * 1000,
};

type StoredSubmissions = {
  timestamps: number[];
};

function readStored(): StoredSubmissions {
  if (typeof window === "undefined") {
    return { timestamps: [] };
  }

  try {
    const raw = localStorage.getItem(CLIENT_RATE_LIMIT.storageKey);
    if (!raw) return { timestamps: [] };
    const parsed = JSON.parse(raw) as StoredSubmissions;
    if (!Array.isArray(parsed.timestamps)) return { timestamps: [] };
    return parsed;
  } catch {
    return { timestamps: [] };
  }
}

function writeStored(data: StoredSubmissions) {
  localStorage.setItem(CLIENT_RATE_LIMIT.storageKey, JSON.stringify(data));
}

export type ClientRateLimitResult =
  | { allowed: true; retryAfterMs?: undefined }
  | { allowed: false; retryAfterMs: number; reason: "interval" | "hourly" };

export function checkClientRateLimit(now = Date.now()): ClientRateLimitResult {
  const pruned = pruneTimestamps(readStored().timestamps, CLIENT_RATE_LIMIT.windowMs, now);
  const result = evaluateRateLimit(pruned, CLIENT_RATE_LIMIT, now);

  if (result.allowed) {
    return { allowed: true };
  }

  const lastAt = pruned[pruned.length - 1];
  const reason =
    lastAt && now - lastAt < CLIENT_RATE_LIMIT.minIntervalMs ? "interval" : "hourly";

  return {
    allowed: false,
    reason,
    retryAfterMs: result.retryAfterMs,
  };
}

export function recordClientSubmission(now = Date.now()) {
  const pruned = pruneTimestamps(readStored().timestamps, CLIENT_RATE_LIMIT.windowMs, now);
  pruned.push(now);
  writeStored({ timestamps: pruned });
}

export function getClientRateLimitMessage(result: ClientRateLimitResult) {
  if (result.allowed) return "";

  if (result.reason === "interval") {
    return `Lütfen ${formatRetryAfter(result.retryAfterMs)} sonra tekrar deneyin.`;
  }

  return `Saatlik gönderim limitine ulaştınız. ${formatRetryAfter(result.retryAfterMs)} sonra tekrar deneyin.`;
}

export { formatRetryAfter };
