import styled from '@emotion/styled';

export const ReviewPageContainer = styled.div`
  height: 100dvh;
  ${({ theme }) => theme.STYLES.LAYOUT};
  background-color: pink;
`;

export const TextWrapper = styled.div`
  padding: 0.62rem 0.24rem;
`;

export const BackwardWrapper = styled.div`
  width: 3rem;
  height: 3rem;
`;

export const BackwardIcon = styled.button`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  background-color: #ffffff;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;
