"use client";

import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  target: number;
  suffix: string;
  delay?: number;
  id: string;
  className?: string;
};

export default function AnimatedCounter({
  target,
  suffix,
  delay = 0,
  id,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted, id]);

  useEffect(() => {
    if (!hasStarted) return;

    const timer = setTimeout(() => {
      let current = 0;
      const increment = target / 60;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCount(Math.floor(current));
      }, 16);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [hasStarted, target, delay]);

  return (
    <div
      id={id}
      className={
        className ??
        "text-3xl sm:text-4xl lg:text-5xl font-bold text-orange mb-2 text-center site-glow-text"
      }
    >
      {count}
      {suffix}
    </div>
  );
}
