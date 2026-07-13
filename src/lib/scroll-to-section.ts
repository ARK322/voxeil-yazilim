import { dispatchServiceTab, parseServiceHash, SERVICE_SECTION_ID } from "@/lib/services";
import { sectionAnchors, type SectionId } from "@/lib/sections";

const FALLBACK_NAV_OFFSET = 92;

function getNavOffset() {
  if (typeof document === "undefined") return FALLBACK_NAV_OFFSET;
  const nav = document.querySelector("nav");
  return nav?.offsetHeight ?? FALLBACK_NAV_OFFSET;
}

function getScrollBehavior(): ScrollBehavior {
  if (typeof window === "undefined") return "auto";
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return coarsePointer || reducedMotion ? "auto" : "smooth";
}

export function scrollToSection(targetId: string) {
  const element = document.getElementById(targetId);
  if (!element) return false;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - getNavOffset();

  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: getScrollBehavior(),
  });

  return true;
}

export function scrollToSectionWithRetry(
  targetId: string,
  options?: { maxAttempts?: number; intervalMs?: number }
) {
  const { maxAttempts = 30, intervalMs = 100 } = options ?? {};

  if (scrollToSection(targetId)) return () => {};

  let attempts = 0;
  const timerId = window.setInterval(() => {
    attempts += 1;
    if (scrollToSection(targetId) || attempts >= maxAttempts) {
      window.clearInterval(timerId);
    }
  }, intervalMs);

  return () => window.clearInterval(timerId);
}

export function scrollToNavTarget(sectionId: SectionId, serviceTab?: number) {
  if (serviceTab !== undefined) {
    dispatchServiceTab(serviceTab);
  }
  return scrollToSectionWithRetry(sectionId);
}

export function parseNavHash(
  hash: string
): { sectionId: SectionId; serviceTab?: number } | null {
  if (!hash) return null;

  const serviceTab = parseServiceHash(hash);
  if (serviceTab !== null) {
    return { sectionId: SERVICE_SECTION_ID as SectionId, serviceTab };
  }

  if (hash === SERVICE_SECTION_ID) {
    return { sectionId: SERVICE_SECTION_ID as SectionId };
  }

  const sectionIds = Object.values(sectionAnchors);
  if (sectionIds.includes(hash as SectionId)) {
    return { sectionId: hash as SectionId };
  }

  return null;
}
