import { Header } from '@components/Header';
import { Button } from '@components/shared/Button';

import { BUTTON_PROPS } from '@styles/button';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import {
  ButtonWrapper,
  PageContent,
  PageWrapper,
} from './NotificationPage.styles';

export const NotificationPage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  if (!loginInfo?.id) {
    throw new Error('로그인이 필요한 서비스입니다.');
  }

  return (
    <PageWrapper>
      <Header isLogo={false} title={'알림'} isRightContainer={false} />
      <ButtonWrapper>
        <Button
          {...BUTTON_PROPS.SMALL_GRAY_OUTLINED_BUTTON_PROPS}
          width="80px"
          height="32px"
          onClick={() => {}}
        >
          모두 지우기
        </Button>
      </ButtonWrapper>
      <PageContent direction="column" gap={16}></PageContent>
    </PageWrapper>
  );
};
