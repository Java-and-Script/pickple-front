import { Header } from '@components/Header';

import { useLoginQuery } from '@hooks/queries/useLoginQuery';

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
  const { refetch } = useLoginQuery({
    oauthProvider: 'KAKAO',
    authCode: '23',
  });

  const onClickKakaoLogin = async () => {
    const { data } = await refetch();
    if (!data) {
      return;
    }
    localStorage.setItem('LOGIN_INFO', JSON.stringify(data));
    localStorage.setItem('ACCESS_TOKEN', data.accessToken);
  };

  return (
    <LoginContainer className="hi">
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
