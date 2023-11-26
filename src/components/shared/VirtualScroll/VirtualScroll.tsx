import { useVirtualScroll } from './VirtualScroll.hook';
import {
  StyledCenterItem,
  StyledItem,
  StyledList,
  StyledVirtualScrollContainer,
} from './VirtualScroll.styles';

type VirtualScrollProps = {
  list: string[];
  onItemSelected: (item: string) => void;
  width: string;
};

export const VirtualScroll = ({
  list,
  onItemSelected,
  width,
}: VirtualScrollProps) => {
  const {
    state: { scrollList, scrollRef, centerIndex },
  } = useVirtualScroll({
    list,
    onItemSelected,
  });

  return (
    <StyledVirtualScrollContainer ref={scrollRef} width={width}>
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
    </StyledVirtualScrollContainer>
  );
};
