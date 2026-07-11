export type RateLimitConfig = {
  maxPerHour: number;
  minIntervalMs: number;
  windowMs: number;
};

export type RateLimitResult =
  | { allowed: true; retryAfterMs?: undefined }
  | { allowed: false; retryAfterMs: number };

export function pruneTimestamps(timestamps: number[], windowMs: number, now: number) {
  const cutoff = now - windowMs;
  return timestamps.filter((ts) => ts > cutoff);
}

export function evaluateRateLimit(
  timestamps: number[],
  config: RateLimitConfig,
  now: number,
): RateLimitResult {
  const pruned = pruneTimestamps(timestamps, config.windowMs, now);

  if (pruned.length > 0) {
    const lastAt = pruned[pruned.length - 1];
    const elapsed = now - lastAt;
    if (elapsed < config.minIntervalMs) {
      return {
        allowed: false,
        retryAfterMs: config.minIntervalMs - elapsed,
      };
    }
  }

  if (pruned.length >= config.maxPerHour) {
    const oldest = pruned[0];
    return {
      allowed: false,
      retryAfterMs: oldest + config.windowMs - now,
    };
  }

  return { allowed: true };
}

export function formatRetryAfter(ms: number) {
  const totalSeconds = Math.max(1, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes > 0) {
    return seconds > 0 ? `${minutes} dk ${seconds} sn` : `${minutes} dk`;
  }

  return `${seconds} sn`;
}
