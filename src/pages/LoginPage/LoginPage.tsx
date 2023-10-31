import { Header } from '@components/shared/Header';

import { IMG_SRC } from '@consts/imageSource';

import KAKAO_LOGIN_SRC from '@assets/kakao_login_large_wide.png';
import LOGO_SRC from '@assets/pickple_logo.png';

import {
  KakaoLoginImage,
  LoginContainer,
  LogoImage,
  MainImage,
  Wrapper,
} from './LoginPage.style';

export const LoginPage = () => {
  return (
    <Wrapper className="hi">
      <Header isLogo={false} title="로그인" isRightContainer={false} />
      <LoginContainer>
        <LogoImage src={LOGO_SRC} width="35%" height="auto" alt="pickle logo" />
        <MainImage
          src={IMG_SRC.LOGIN_MAIN}
          width="100%"
          height="55%"
          alt="login main banner"
        />
        <KakaoLoginImage
          src={KAKAO_LOGIN_SRC}
          width="100%"
          height="auto"
          alt="kakao login"
        />
      </LoginContainer>
    </Wrapper>
  );
};
