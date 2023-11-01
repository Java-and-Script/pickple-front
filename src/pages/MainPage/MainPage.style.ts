import styled from '@emotion/styled';

export const MainPageContainer = styled.div`
  width: 100vw;
  margin-top: 0.6rem;
  ${({ theme }) => theme.STYLES.LAYOUT}
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const MainPageSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1.25rem;
`;
