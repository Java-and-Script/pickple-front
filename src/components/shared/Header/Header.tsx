import { useNavigate } from 'react-router-dom';

import bellIcon from '@assets/bell.svg';
import leftArrowIcon from '@assets/leftArrow.svg';
import logoImg from '@assets/logo.png';
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

  return (
    <>
      <HeaderBackground>
        <HeaderContainer>
          {isLogo ? (
            <LogoWrapper>
              <LogoIcon onClick={() => handleLogoClick()}>
                <img src={logoImg} alt="" />
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
        </HeaderContainer>
      </HeaderBackground>
    </>
  );
};
