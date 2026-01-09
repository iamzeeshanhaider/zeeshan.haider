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
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let scrollHandler: (() => void) | null = null;

    const initTimeout = setTimeout(() => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const isInViewportOnLoad = rect.top >= 0 && rect.top < window.innerHeight && window.scrollY === 0;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && (!triggerOnce || !hasTriggeredRef.current)) {
              hasTriggeredRef.current = true;
              setIsVisible(true);
            }
          });
        },
        { threshold, rootMargin }
      );

      if (isInViewportOnLoad) {
        scrollHandler = () => {
          if (window.scrollY > 50 && !hasTriggeredRef.current && elementRef.current && observer) {
            observer.observe(elementRef.current);
            window.removeEventListener("scroll", scrollHandler!);
            scrollHandler = null;
          }
        };
        window.addEventListener("scroll", scrollHandler, { passive: true });
      } else {
        if (elementRef.current) {
          observer.observe(elementRef.current);
        }
      }
    }, 100);

    return () => {
      clearTimeout(initTimeout);
      if (scrollHandler) {
        window.removeEventListener("scroll", scrollHandler);
      }
      if (observer && elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { isVisible, elementRef };
}

