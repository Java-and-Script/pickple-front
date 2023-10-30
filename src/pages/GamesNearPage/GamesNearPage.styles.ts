import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  margin: -50px -16px 0 -16px;
  padding: 50px 16px 80px 16px;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
