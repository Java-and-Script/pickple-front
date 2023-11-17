import { NotificationItem } from '@components/NotificationItem';

import { CrewAlarm } from '@type/models';

import { CrewNotificationContent } from './CrewNotificationContent';

type CrewNotificationItemProps = { alarm: CrewAlarm; onClick: VoidFunction };

export const CrewNotificationItem = ({
  alarm,
  onClick,
}: CrewNotificationItemProps) => {
  return (
    <NotificationItem
      box={<NotificationItem.Image src={alarm.crewImageUrl} />}
      title={alarm.crewName}
      createdAt={new Date(alarm.createdAt)}
      content={<CrewNotificationContent alarmType={alarm.alarmType} />}
      read={alarm.status === 'read'}
      onClick={onClick}
    />
  );
};
