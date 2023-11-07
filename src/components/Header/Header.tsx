import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@components/shared/Button';

import { theme } from '@styles/theme';

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
};

export const Header = ({
  isLogo = false,
  title = '',
  isRightContainer = true,
}: Partial<HeaderProps>) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleBackwardIconClick = () => {
    navigate(-1);
  };

  const handleSearchIconClick = () => {
    navigate('/search');
  };

  const handleBellIconClick = () => {
    navigate('/notification');
  };

  const handleProfileIconClick = () => {
    navigate('/all-services');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const url = useParams();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const loginInfo = localStorage.getItem('LOGIN_INFO');

    if (!loginInfo) {
      setIsLogin(false);
    } else {
      const { refreshToken } = JSON.parse(loginInfo);

      if (!refreshToken) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }
    }
  }, [url]);

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
          {isLogin ? (
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
