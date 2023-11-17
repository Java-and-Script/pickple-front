import { Text } from '@components/shared/Text';

import { GameAlarmType } from '@type/models';

type GameNotificationContentProps = {
  alarmType: GameAlarmType;
};

export const GameNotificationContent = ({
  alarmType,
}: GameNotificationContentProps) => {
  let message: string;
  switch (alarmType) {
    case 'host-1':
      message = '수락을 기다리고 있어요.';
      break;
    case 'guest-1':
      message = '가 수락되었어요.';
      break;
    default:
      message = '가 거절되었어요.';
  }

  return (
    <span>
      <Text size={14}>게스트 모집 참여 수락</Text>
      <Text size={14} weight={300}>
        {message}
      </Text>
    </span>
  );
};
