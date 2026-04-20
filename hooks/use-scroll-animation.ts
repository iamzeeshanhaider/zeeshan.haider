import { useState, useEffect, useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px 0px -10% 0px",
  triggerOnce = true,
}: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    // If the element is already inside the viewport on mount, reveal immediately.
    // This is the common case for the first screens (hero, about, stats).
    const rect = node.getBoundingClientRect();
    const alreadyVisible =
      rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) {
      setIsVisible(true);
      if (triggerOnce) return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) observer.disconnect();
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { isVisible, elementRef };
}
