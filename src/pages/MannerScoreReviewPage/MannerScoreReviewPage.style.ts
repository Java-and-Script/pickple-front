import styled from '@emotion/styled';

export const ReviewPageContainer = styled.div`
  min-height: 100dvh;
  ${({ theme }) => theme.STYLES.LAYOUT};
  /* background-color: pink; */
  overflow-x: hidden;
`;

type MemberListContainerProps = {
  transform: number;
};

export const MemberListContainer = styled.div<MemberListContainerProps>`
  width: 100%;
  transform: translateX(calc(50% - 25px + ${(props) => props.transform}px));
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
    filter: invert(47%) sepia(7%) saturate(735%) hue-rotate(182deg)
      brightness(92%) contrast(90%);
    width: 100%;
    height: 100%;
  }
`;

type BoxProps = {
  height: string;
};

export const Box = styled.div<BoxProps>`
  height: ${(props) => props.height};
`;

export const ProfileWrapper = styled.div`
  margin: 0 16px;
`;
