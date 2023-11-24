import { LoginRequireError } from '@routes/LoginRequireBoundary';

import { Header } from '@components/Header';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';

import { useAlarmsDeleteMutation } from '@hooks/mutations/useAlarmsDeleteMutation';
import { useCrewAlarmsPatchMutation } from '@hooks/mutations/useCrewAlarmsPatchMutation';
import { useGameAlarmsPatchMutation } from '@hooks/mutations/useGameAlarmsPatchMutation';

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
    crewAlarmId: 1,
    crewId: 1,
    crewName: '민재크루',
    isRead: false,
    crewImageUrl: 'asd',
    createdAt: '2023-10-19T17:46:14',
    crewAlarmMessage: '크루 가입이 거절되었어요',
  },
  {
    gameAlarmId: 1,
    gameId: 1,
    isRead: true,
    createdAt: '2023-10-19T17:46:14',
    mainAddress: '서울시 은평구 갈현동',
    playDate: '2023-11-17',
    playStartTime: '11:30:00',
    playTimeMinutes: 60,
    gameAlarmMessage: '게스트 참여가 수락되었어요',
  },
];

export const NotificationPage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  const isLoggedIn = Boolean(loginInfo?.id);
  if (!isLoggedIn) {
    throw new LoginRequireError();
  }

  const { mutate: deleteAlarmMutate } = useAlarmsDeleteMutation();
  const { mutate: readCrewAlarmMutate } = useCrewAlarmsPatchMutation();
  const { mutate: readGameAlarmMutate } = useGameAlarmsPatchMutation();

  return (
    <PageWrapper>
      <Header isLogo={false} title={'알림'} isRightContainer={false} />
      <ButtonWrapper>
        <Button
          {...BUTTON_PROPS.SMALL_GRAY_OUTLINED_BUTTON_PROPS}
          width="80px"
          height="32px"
          onClick={() => deleteAlarmMutate()}
        >
          <Text size={12} nowrap>
            모두 지우기
          </Text>
        </Button>
      </ButtonWrapper>
      <PageContent direction="column" gap={16}>
        {ALARMS.map((alarm, index) => {
          if ('crewName' in alarm) {
            return (
              <CrewNotificationItem
                key={index}
                alarm={alarm}
                onClick={() => readCrewAlarmMutate(alarm.crewId)}
              />
            );
          }
          return (
            <GameNotificationItem
              key={index}
              alarm={alarm}
              onClick={() => readGameAlarmMutate(alarm.gameId)}
            />
          );
        })}
      </PageContent>
    </PageWrapper>
  );
};
