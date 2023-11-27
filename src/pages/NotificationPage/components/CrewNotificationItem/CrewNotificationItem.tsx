import { useNavigate } from 'react-router-dom';

import { NotificationItem } from '@components/NotificationItem';

import { CrewAlarm } from '@type/models';

import { PATH_NAME } from '@consts/pathName';

type CrewNotificationItemProps = { alarm: CrewAlarm; onClick: VoidFunction };

const getRedirectMap = (
  crewId: string
): Record<CrewAlarm['crewAlarmMessage'], string> => ({
  '가입 수락을 기다리고 있어요': PATH_NAME.GET_CREWS_MANAGE_PATH(crewId),
  '크루 가입이 수락되었어요': PATH_NAME.GET_CREWS_PATH(crewId),
  '크루 가입이 거절되었어요': PATH_NAME.CREWS_RECOMMEND,
});

export const CrewNotificationItem = ({
  alarm,
  onClick,
}: CrewNotificationItemProps) => {
  const navigate = useNavigate();

  return (
    <NotificationItem
      box={<NotificationItem.Image src={alarm.crewImageUrl} />}
      title={alarm.crewName}
      createdAt={new Date(alarm.createdAt)}
      content={alarm.crewAlarmMessage}
      // content={<CrewNotificationContent alarmType={alarm.alarmType} />}
      read={alarm.isRead}
      onClick={() => {
        onClick();
        navigate(getRedirectMap(String(alarm.crewId))[alarm.crewAlarmMessage]);
      }}
    />
  );
};
