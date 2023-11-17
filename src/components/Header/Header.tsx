import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import { Avatar } from '@components/Avatar';

import { useEventSource } from '@hooks/useEventSource';

import { theme } from '@styles/theme';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PATH_NAME } from '@consts/pathName';

import bellIcon from '@assets/bell.svg';
import leftArrowIcon from '@assets/leftArrow.svg';
import logoSvg from '@assets/logoSvg.svg';
import searchIcon from '@assets/search.svg';

import {
  BackwardIcon,
  BackwardWrapper,
  Badge,
  BellIcon,
  HeaderBackground,
  HeaderContainer,
  LoginButton,
  LogoIcon,
  LogoWrapper,
  RightSideContainer,
  RightSideIcon,
  RightSideIconWrapper,
  Title,
} from './Header.style';

type HeaderProps = {
  isLogo: boolean;
  title: React.ReactNode;
  isRightContainer: boolean;
  rightElement?: React.ReactNode;
};

export const Header = ({
  isLogo = false,
  title = '',
  isRightContainer = true,
  rightElement,
}: Partial<HeaderProps>) => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // TODO: 알림 api 나오면 주석 풀기
  // const {
  //   data: { unread },
  // } = useAlarmsUnreadQuery();
  useEventSource('/alarms/subscribe', () => {
    queryClient.resetQueries({ queryKey: ['alarms'] });
    queryClient.invalidateQueries({ queryKey: ['alarms-unread'] });
  });

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
    if (loginInfo?.id) {
      navigate(PATH_NAME.GET_PROFILE_PATH(String(loginInfo.id)));
    }
  };

  const handleLoginClick = () => {
    navigate(PATH_NAME.LOGIN);
  };

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
          {rightElement ? (
            rightElement
          ) : loginInfo ? (
            <RightSideContainer className={isRightContainer ? '' : 'invisible'}>
              <RightSideIconWrapper>
                <RightSideIcon onClick={() => handleSearchIconClick()}>
                  <img src={searchIcon} alt="" />
                </RightSideIcon>
              </RightSideIconWrapper>
              <RightSideIconWrapper>
                <BellIcon onClick={() => handleBellIconClick()}>
                  <img src={bellIcon} alt="" />
                  <Badge />
                </BellIcon>
              </RightSideIconWrapper>
              <RightSideIconWrapper>
                <RightSideIcon onClick={() => handleProfileIconClick()}>
                  <Avatar src={loginInfo.profileImageUrl} />
                </RightSideIcon>
              </RightSideIconWrapper>
            </RightSideContainer>
          ) : (
            <RightSideContainer
              className={isRightContainer ? '' : 'invisible'}
              isLogin={true}
            >
              <LoginButton
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
              </LoginButton>
            </RightSideContainer>
          )}
        </HeaderContainer>
      </HeaderBackground>
    </>
  );
};
