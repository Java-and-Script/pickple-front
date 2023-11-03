import { useEffect } from 'react';

import { useIntersectionObserver } from './useIntersectionObserver';

export const useInfiniteScroll = <T extends HTMLElement>(
  onIntersecting: VoidFunction
) => {
  const [ref, entry] = useIntersectionObserver<T>({});

  useEffect(() => {
    if (entry?.isIntersecting) {
      onIntersecting();
    }
  }, [entry, onIntersecting]);

  return ref;
};
