import { Header } from '@components/Header';
import { Text } from '@components/shared/Text';

import LOGO_SRC from '@assets/logoSvg.svg';

import { KakaoLogin, LoginContainer, LogoImage, Main } from './LoginPage.style';
import { kakaoOauthLogin } from './services/kakaoOauthLogin';

export const LoginPage = () => {
  return (
    <LoginContainer direction="column">
      <Header isLogo={false} title="로그인" isRightContainer={false} />
      <Main>
        <LogoImage src={LOGO_SRC} width="50%" height="auto" alt="pickle logo" />
        <KakaoLogin justify="center" align="center" onClick={kakaoOauthLogin}>
          <Text nowrap weight={700} color="#47292A">
            카카오 아이디로 로그인
          </Text>
        </KakaoLogin>
      </Main>
    </LoginContainer>
  );
};
