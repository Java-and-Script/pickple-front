import styled from '@emotion/styled';

export const PageLayout = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const PageWrapper = styled.div`
  padding-top: 1rem;
  ${({ theme }) => theme.STYLES.FLEX_DIRECTION_COLUMN}
`;

export const StyledTitle = styled.div`
  margin-bottom: 16px;
`;

export const StyledPositionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const StyledCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledEmptyContainer = styled.div`
  height: 16px;
`;

export const StyledTimeSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const StyledTimeColon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
`;
