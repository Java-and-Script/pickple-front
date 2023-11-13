import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
  height: 100dvh;
`;

export const PageContent = styled.div`
  padding: 10px 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
