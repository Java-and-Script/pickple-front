import { LoginRequireError } from '@routes/LoginRequireBoundary';

import { Header } from '@components/Header';
import { Button } from '@components/shared/Button';

import { BUTTON_PROPS } from '@styles/button';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { Alarm } from '@type/models';

import {
  ButtonWrapper,
  PageContent,
  PageWrapper,
} from './NotificationPage.styles';
import { CrewNotificationItem } from './components/CrewNotificationItem';
import { GameNotificationItem } from './components/GameNotificationItem/GameNotificationItem';

const ALARMS: Alarm[] = [
  {
    id: 1,
    alarmType: 'crewLeader-1',
    crewName: '민재크루',
    status: 'unread',
    crewImageUrl: 'asd',
    createdAt: '2023-10-19T17:46:14',
  },
  {
    id: 1,
    alarmType: 'host-1',
    status: 'unread',
    createdAt: '2023-10-19T17:46:14',
    mainAddress: '서울시 은평구 갈현동',
    playDate: '2023-11-17',
    playStartTime: '11:30:00',
    playTimeMinutes: 60,
  },
];

export const NotificationPage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  const isLoggedIn = Boolean(loginInfo?.id);
  if (!isLoggedIn) {
    throw new LoginRequireError();
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
      <PageContent direction="column" gap={16}>
        {ALARMS.map((alarm, index) => {
          if ('crewName' in alarm) {
            return (
              <CrewNotificationItem
                key={index}
                alarm={alarm}
                onClick={() => {}}
              />
            );
          }
          return (
            <GameNotificationItem
              key={index}
              alarm={alarm}
              onClick={() => {}}
            />
          );
        })}
      </PageContent>
    </PageWrapper>
  );
};
