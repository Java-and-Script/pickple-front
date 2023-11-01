import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = <T extends HTMLElement>({
  threshold = 0,
  root = null,
  rootMargin = '0%',
}: IntersectionObserverInit) => {
  const ref = useRef<T | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, threshold, root, rootMargin]);

  return [ref, entry] as const;
};
