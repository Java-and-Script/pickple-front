import { Text } from '@components/shared/Text';

import { CrewAlarmType } from '@type/models';

type CrewNotificationContentProps = {
  alarmType: CrewAlarmType;
};

export const CrewNotificationContent = ({
  alarmType,
}: CrewNotificationContentProps) => {
  let message: string;
  switch (alarmType) {
    case 'crewLeader-1':
      message = '수락을 기다리고 있어요.';
      break;
    case 'crew-1':
      message = '이 수락되었어요.';
      break;
    default:
      message = '이 거절되었어요.';
  }

  return (
    <span>
      <Text size={14}>크루가입</Text>
      <Text size={14} weight={300}>
        {message}
      </Text>
    </span>
  );
};
