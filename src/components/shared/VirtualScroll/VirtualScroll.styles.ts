import styled from '@emotion/styled';

export const StyledVirtualScrollWrapper = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  height: 8rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledList = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const StyledItem = styled.div`
  ${({ theme }) => theme.STYLES.FLEX_CENTER};
  height: 2.5rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.LIGHT};
  color: ${({ theme }) => theme.PALETTE.GRAY_700};
  transition: background-color 0.3s;
`;

export const StyledCenterItem = styled(StyledItem)`
  background-color: rgba(200, 200, 200, 0.3);
`;
