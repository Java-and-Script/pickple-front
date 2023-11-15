import { Header } from '@components/Header';
import { NotificationItem } from '@components/NotificationItem';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';

import { BUTTON_PROPS } from '@styles/button';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import {
  ButtonWrapper,
  PageContent,
  PageLayout,
  PageWrapper,
} from './NotificationPage.styles';

export const NotificationPage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  if (!loginInfo?.id) {
    throw new Error('로그인이 필요한 서비스입니다.');
  }

  return (
    <PageLayout>
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
        <PageContent direction="column" gap={16}>
          <NotificationItem
            box={<NotificationItem.Image src="asd" />}
            title="뜨거운 백둥사형제"
            createdAt={new Date()}
            content={
              <span>
                <Text size={14}>크루가입</Text>
                <Text size={14} weight={300}>
                  이 수락되었어요.
                </Text>
              </span>
            }
            read
            onClick={() => {}}
          />
          <NotificationItem
            box={
              <NotificationItem.MatchStatus
                startTime={new Date()}
                timeMinutes={90}
              />
            }
            title="10.21 송파구"
            createdAt={new Date()}
            content={
              <span>
                <Text size={14}>게스트 모집 참여 수락</Text>
                <Text size={14} weight={300}>
                  을 기다리고 있어요.
                </Text>
              </span>
            }
            onClick={() => {}}
          />
        </PageContent>
      </PageWrapper>
    </PageLayout>
  );
};
