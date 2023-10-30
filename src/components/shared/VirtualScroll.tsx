import { useEffect, useMemo, useRef, useState } from 'react';

import styled from '@emotion/styled';

const StyledVirtualScrollWrapper = styled.div`
  width: 17.5rem;
  height: 8rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledList = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const StyledItem = styled.div`
  ${({ theme }) => theme.STYLES.FLEX_CENTER};
  height: 2.5rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.LIGHT};
  color: ${({ theme }) => theme.PALETTE.GRAY_700};
  transition: background-color 0.3s;
`;

const StyledCenterItem = styled(StyledItem)`
  background-color: rgba(200, 200, 200, 0.3);
`;

export const VirtualScroll = ({ list }: { list: string[] }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>('');
  const scrollList = useMemo(() => [null, ...list, null], [list]);
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
        setSelectedItem(scrollList[centerItemIndex]);
      };
      scrollContainer.addEventListener('scroll', updateCenterItemWithRef);

      updateCenterItemWithRef();

      return () => {
        scrollContainer.removeEventListener('scroll', updateCenterItemWithRef);
      };
    }
  }, [scrollList, selectedItem]);

  return (
    <StyledVirtualScrollWrapper ref={scrollRef}>
      <StyledList>
        {scrollList.map((item, index) => (
          <div key={index}>
            {index === centerIndex ? (
              <StyledCenterItem>{item}</StyledCenterItem>
            ) : (
              <StyledItem>{item}</StyledItem>
            )}
          </div>
        ))}
      </StyledList>
    </StyledVirtualScrollWrapper>
  );
};
