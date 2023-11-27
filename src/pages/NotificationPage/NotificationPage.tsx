import { LoginRequireError } from '@routes/LoginRequireBoundary';

import { Header } from '@components/Header';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';

import { useAlarmsDeleteMutation } from '@hooks/mutations/useAlarmsDeleteMutation';
import { useCrewAlarmsPatchMutation } from '@hooks/mutations/useCrewAlarmsPatchMutation';
import { useGameAlarmsPatchMutation } from '@hooks/mutations/useGameAlarmsPatchMutation';
import { useAlarmsQuery } from '@hooks/queries/useAlarmsQuery';

import { BUTTON_PROPS } from '@styles/button';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import {
  ButtonWrapper,
  PageContent,
  PageWrapper,
} from './NotificationPage.styles';
import { CrewNotificationItem } from './components/CrewNotificationItem';
import { GameNotificationItem } from './components/GameNotificationItem/GameNotificationItem';

export const NotificationPage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  const isLoggedIn = Boolean(loginInfo?.id);
  if (!isLoggedIn) {
    throw new LoginRequireError();
  }

  const {
    data: { pages },
  } = useAlarmsQuery();
  const alarms = pages.flatMap((page) => page.alarmResponse);

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
        {alarms.map((alarm, index) => {
          if ('crewName' in alarm) {
            return (
              <CrewNotificationItem
                key={`alarm-key-${index}`}
                alarm={alarm}
                onClick={() => readCrewAlarmMutate(alarm.crewId)}
              />
            );
          }
          return (
            <GameNotificationItem
              key={`alarm-key-${index}`}
              alarm={alarm}
              onClick={() => readGameAlarmMutate(alarm.gameId)}
            />
          );
        })}
      </PageContent>
    </PageWrapper>
  );
};
