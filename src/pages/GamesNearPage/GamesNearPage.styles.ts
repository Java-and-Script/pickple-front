import styled from '@emotion/styled';

export const PageLayout = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const PageContent = styled.div`
  padding: 10px 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
