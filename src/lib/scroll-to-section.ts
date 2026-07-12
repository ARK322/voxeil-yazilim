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
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - getNavOffset();

  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: getScrollBehavior(),
  });
}
