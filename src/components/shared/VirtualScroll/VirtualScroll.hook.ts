import { useEffect, useMemo, useRef, useState } from 'react';

type useVirtualScrollProps = {
  list: string[];
  onItemSelected: (item: string) => void;
};

export const useVirtualScroll = ({
  list,
  onItemSelected,
}: useVirtualScrollProps) => {
  const scrollList = useMemo(() => [null, null, ...list, null, null], [list]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current as HTMLDivElement;
      const updateCenterItemWithRef = () => {
        const containerHeight = scrollContainer.clientHeight;
        const itemHeight = 2.5 * 16;
        const scrollTop = scrollContainer.scrollTop;
        const centerScroll = containerHeight / 2;
        const centerItemIndex = Math.floor(
          (scrollTop + centerScroll) / itemHeight
        );
        setCenterIndex(centerItemIndex);
        onItemSelected(scrollList[centerItemIndex] as string);
      };
      scrollContainer.addEventListener('scroll', updateCenterItemWithRef);

      updateCenterItemWithRef();

      return () => {
        scrollContainer.removeEventListener('scroll', updateCenterItemWithRef);
      };
    }
  }, [scrollList, onItemSelected]);

  return {
    state: {
      scrollList,
      scrollRef,
      centerIndex,
    },
  };
};
