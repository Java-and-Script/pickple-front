import { useIntersectionObserver } from './useIntersectionObserver';

export const useHeaderTitle = <T extends HTMLElement>() => {
  const [entryRef, entry] = useIntersectionObserver<T>({});
  const showHeaderTitle = entry && !entry.isIntersecting;

  return { entryRef, showHeaderTitle };
};
