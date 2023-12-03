import { Header } from '@components/Header';
import { Text } from '@components/shared/Text';

import { BUTTON_PROPS } from '@styles/button';

import {
  ButtonWrapper,
  DeleteButton,
  PageContent,
  PageWrapper,
} from './NotificationPage.styles';
import { CrewNotificationItem } from './components/CrewNotificationItem';
import { GameNotificationItem } from './components/GameNotificationItem/GameNotificationItem';
import { useNotificationPage } from './hooks/useNotificationPage';

export const NotificationPage = () => {
  const { alarms, deleteAlarmMutate, entryRef } = useNotificationPage();

  return (
    <PageWrapper>
      <Header isLogo={false} title={'알림'} isRightContainer={false} />
      <ButtonWrapper>
        <DeleteButton
          {...BUTTON_PROPS.SMALL_GRAY_OUTLINED_BUTTON_PROPS}
          width="80px"
          height="32px"
          onClick={() => deleteAlarmMutate()}
        >
          <Text size={12} nowrap>
            모두 지우기
          </Text>
        </DeleteButton>
      </ButtonWrapper>
      <PageContent direction="column" gap={16}>
        {alarms.map((alarm, index) => {
          if ('crewName' in alarm) {
            return (
              <CrewNotificationItem key={`alarm-key-${index}`} alarm={alarm} />
            );
          }
          return (
            <GameNotificationItem key={`alarm-key-${index}`} alarm={alarm} />
          );
        })}
        <div ref={entryRef} />
      </PageContent>
    </PageWrapper>
  );
};
