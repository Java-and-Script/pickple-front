import { useNavigate } from 'react-router-dom';

import { NotificationItem } from '@/components/NotificationItem';

import { useGameAlarmsPatchMutation } from '@hooks/alarms/useGameAlarmsPatchMutation';

import { GameAlarm } from '@type/models';

import { PATH_NAME } from '@constants/pathName';

import { getGameStartDate } from '@utils/domain';

import { getGameNotificationTitle } from './getGameNotificationTitle';

type GameNotificationItemProps = { alarm: GameAlarm; onClick?: VoidFunction };

const getRedirectMap = (
  gameId: string
): Record<GameAlarm['gameAlarmMessage'], string> => ({
  '게스트 모집 참여 수락을 기다리고 있어요':
    PATH_NAME.GET_GAMES_MANAGE_PATH(gameId),
  '게스트 참여가 수락되었어요': PATH_NAME.GET_GAMES_PATH(gameId),
  '게스트 참여가 거절되었어요': PATH_NAME.GAMES_NEAR,
});

export const GameNotificationItem = ({
  alarm,
  onClick,
}: GameNotificationItemProps) => {
  const navigate = useNavigate();
  const { mutate: readGameAlarmMutate } = useGameAlarmsPatchMutation();

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
      content={alarm.gameAlarmMessage}
      read={alarm.isRead}
      onClick={() => {
        onClick?.();
        readGameAlarmMutate(alarm.gameAlarmId);
        navigate(getRedirectMap(String(alarm.gameId))[alarm.gameAlarmMessage]);
      }}
    />
  );
};
