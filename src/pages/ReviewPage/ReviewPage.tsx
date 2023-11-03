import styled from '@emotion/styled';

import { Header } from '@components/Header';

export const ReviewPage = () => {
  return (
    <ReviewPageContainer>
      <Header isRightContainer={false} />
    </ReviewPageContainer>
  );
};

export const ReviewPageContainer = styled.div`
  height: 100dvh;
  background-color: pink;
`;
