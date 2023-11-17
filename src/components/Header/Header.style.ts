import styled from '@emotion/styled';

import { Button } from '@components/shared/Button';

export const HeaderBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 16px;
  z-index: 888;
  height: 2.5rem;
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
  text-overflow: ellipsis;
  overflow: hidden;
  width: 40%;
  height: 100%;
  line-height: 2.5rem;
  text-align: center;
`;

export const RightSideContainer = styled.div<{ isLogin?: boolean }>`
  width: 5.5rem;
  ${({ theme }) => theme.STYLES.FLEX_JUSTIFY_CENTER}
  justify-content:${({ isLogin }) => (isLogin ? 'flex-end' : 'space-between')};

  &.invisible {
    visibility: hidden;
  }
`;

export const RightSideIconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

export const RightSideIcon = styled.button`
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

export const LoginButton = styled(Button)`
  white-space: nowrap;
`;

export const BellIcon = styled(RightSideIcon)`
  position: relative;
`;

export const Badge = styled.div`
  background-color: ${({ theme }) => theme.PALETTE.RED_600};
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;
