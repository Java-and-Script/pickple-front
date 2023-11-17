import { NotificationItem } from '@/components/NotificationItem';

import { GameAlarm } from '@type/models';

import { getGameStartDate } from '@utils/domain';

import { GameNotificationContent } from './GameNotificationContent';
import { getGameNotificationTitle } from './getGameNotificationTitle';

type GameNotificationItemProps = { alarm: GameAlarm; onClick: VoidFunction };

export const GameNotificationItem = ({
  alarm,
  onClick,
}: GameNotificationItemProps) => {
  return (
    <NotificationItem
      box={
        <NotificationItem.MatchStatus
          startTime={getGameStartDate(alarm.playDate, alarm.playStartTime)}
          timeMinutes={alarm.playTimeMinutes}
        />
      }
      title={getGameNotificationTitle(alarm.playDate, alarm.mainAddress)}
      createdAt={new Date(alarm.createdAt)}
      content={<GameNotificationContent alarmType={alarm.alarmType} />}
      read={alarm.status === 'read'}
      onClick={onClick}
    />
  );
};
