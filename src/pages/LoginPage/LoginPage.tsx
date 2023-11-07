import { getAuthRedirect } from '@api/member/getAuthRedirect';

import { Header } from '@components/Header';

import KAKAO_LOGIN_SRC from '@assets/kakao_login_large_wide.png';
import LOGO_SRC from '@assets/logoSvg.svg';

import {
  KakaoLoginImage,
  LoginContainer,
  LogoImage,
  Main,
  MainImage,
} from './LoginPage.style';

const LOGIN_MAIN =
  'https://github.com/Java-and-Script/pickple-front/assets/87280835/1134921d-2e91-4b47-b99a-4095c91f0a6d';

export const LoginPage = () => {
  // const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  // const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const onClickKakaoLogin = async () => {
    // await fetch('https://dev.pickple.kr/auth/kakao');
    // window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;
    getAuthRedirect({ oauthProvider: 'KAKAO' });
  };

  return (
    <LoginContainer>
      <Header isLogo={false} title="로그인" isRightContainer={false} />
      <Main>
        <LogoImage src={LOGO_SRC} width="35%" height="auto" alt="pickle logo" />
        <MainImage
          src={LOGIN_MAIN}
          width="100%"
          height="55%"
          alt="login main banner"
        />
        <KakaoLoginImage
          src={KAKAO_LOGIN_SRC}
          width="100%"
          height="auto"
          alt="kakao login"
          onClick={() => onClickKakaoLogin()}
        />
      </Main>
    </LoginContainer>
  );
};
