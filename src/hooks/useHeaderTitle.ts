import { useIntersectionObserver } from './useIntersectionObserver';

export const useHeaderTitle = <T extends HTMLElement>() => {
  const [entryRef, entry] = useIntersectionObserver<T>({
    rootMargin: '-50px',
  });
  const showHeaderTitle = entry && !entry.isIntersecting;

  return { entryRef, showHeaderTitle };
};
