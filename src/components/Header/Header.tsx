import { useNavigate } from 'react-router-dom';

import { Button } from '@components/shared/Button';

import { theme } from '@styles/theme';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import bellIcon from '@assets/bell.svg';
import leftArrowIcon from '@assets/leftArrow.svg';
import logoSvg from '@assets/logoSvg.svg';
import profileIcon from '@assets/profile.svg';
import searchIcon from '@assets/search.svg';

import {
  BackwardIcon,
  BackwardWrapper,
  HeaderBackground,
  HeaderContainer,
  LogoIcon,
  LogoWrapper,
  RightSideContainer,
  RightSideIcon,
  RightSideIconWrapper,
  Title,
} from './Header.style';

type HeaderProps = {
  isLogo: boolean;
  title: string;
  isRightContainer: boolean;
  onNavigate?: VoidFunction;
};

export const Header = ({
  isLogo = false,
  title = '',
  isRightContainer = true,
  onNavigate,
}: Partial<HeaderProps>) => {
  const navigate = useNavigate();

  const handleClick = (callback: VoidFunction) => {
    onNavigate?.();
    callback();
  };

  const handleLogoClick = () => {
    handleClick(() => navigate('/'));
  };

  const handleBackwardIconClick = () => {
    handleClick(() => navigate(-1));
  };

  const handleSearchIconClick = () => {
    handleClick(() => navigate('/search'));
  };

  const handleBellIconClick = () => {
    handleClick(() => navigate('/notification'));
  };

  const handleProfileIconClick = () => {
    handleClick(() => navigate('/all-services'));
  };

  const handleLoginClick = () => {
    handleClick(() => navigate('/login'));
  };

  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  return (
    <>
      <HeaderBackground>
        <HeaderContainer>
          {isLogo ? (
            <LogoWrapper>
              <LogoIcon onClick={() => handleLogoClick()}>
                <img src={logoSvg} alt="" />
              </LogoIcon>
            </LogoWrapper>
          ) : (
            <BackwardWrapper>
              <BackwardIcon onClick={() => handleBackwardIconClick()}>
                <img src={leftArrowIcon} alt="" />
              </BackwardIcon>
            </BackwardWrapper>
          )}
          {title === '' ? <></> : <Title>{title}</Title>}
          {loginInfo ? (
            <RightSideContainer className={isRightContainer ? '' : 'invisible'}>
              <RightSideIconWrapper>
                <RightSideIcon onClick={() => handleSearchIconClick()}>
                  <img src={searchIcon} alt="" />
                </RightSideIcon>
              </RightSideIconWrapper>
              <RightSideIconWrapper>
                <RightSideIcon onClick={() => handleBellIconClick()}>
                  <img src={bellIcon} alt="" />
                </RightSideIcon>
              </RightSideIconWrapper>
              <RightSideIconWrapper>
                <RightSideIcon onClick={() => handleProfileIconClick()}>
                  <img src={profileIcon} alt="" />
                </RightSideIcon>
              </RightSideIconWrapper>
            </RightSideContainer>
          ) : (
            <RightSideContainer
              className={isRightContainer ? '' : 'invisible'}
              isLogin={true}
            >
              <Button
                width="60px"
                height="24px"
                fontWeight={300}
                textColor={theme.PALETTE.GRAY_600}
                fontSize={theme.FONT_SIZE.XS}
                backgroundColor="white"
                borderColor={theme.PALETTE.GRAY_600}
                onClick={handleLoginClick}
              >
                로그인
              </Button>
            </RightSideContainer>
          )}
        </HeaderContainer>
      </HeaderBackground>
    </>
  );
};
