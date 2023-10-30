import { Header } from '@components/shared/Header';
import { Image } from '@components/shared/Image';

import { IMG_SRC } from '@consts/imageSource';

import KAKAO_LOGIN_SRC from '@assets/kakao_login_large_wide.png';
import LOGO_SRC from '@assets/pickple_logo.png';

import { LoginContainer, MainImage, RemoveLayout } from './LoginPage.style';

export const LoginPage = () => {
  return (
    <RemoveLayout>
      <Header isLogo={false} title="로그인" isRightContainer={false} />
      <LoginContainer>
        <Image src={LOGO_SRC} width="30%" height="auto" alt="pickle logo" />
        <MainImage
          src={IMG_SRC.LOGIN_MAIN}
          width="100%"
          height="55%"
          alt="login main banner"
        />
        <Image
          src={KAKAO_LOGIN_SRC}
          width="100%"
          height="auto"
          alt="kakao login"
        />
      </LoginContainer>
    </RemoveLayout>
  );
};
