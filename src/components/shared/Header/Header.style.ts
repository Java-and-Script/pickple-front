import styled from '@emotion/styled';

export const HeaderBackground = styled.div`
  position: fixed;
  top: 0;
  z-index: 888;
  height: 2.5rem;
  max-width: 375px;
  width: 100%;
  background-color: #ffffff;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.STYLES.FLEX_ALIGN_CENTER}
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  width: 3.06rem;
  height: 2.13;
`;

export const LogoIcon = styled.button`
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

export const BackwardWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
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

export const Title = styled.div`
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;

export const RightContainer = styled.div`
  width: 5.5rem;
  ${({ theme }) => theme.STYLES.FLEX_JUSTIFY_CENTER}
  justify-content: space-between;

  &.invincible {
    visibility: hidden;
  }
`;

export const SearchIconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

export const SearchIcon = styled.button`
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

export const BellIconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

export const BellIcon = styled.button`
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

export const ProfileIconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

export const ProfileIcon = styled.button`
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
