import toast from 'react-hot-toast';

import { QueryClient, useQueryClient } from '@tanstack/react-query';

import { CrewNotificationItem } from '@pages/NotificationPage/components/CrewNotificationItem';
import { GameNotificationItem } from '@pages/NotificationPage/components/GameNotificationItem';

import { useEventSource } from '@hooks/useEventSource';

import { Alarm, CrewAlarm, GameAlarm } from '@type/models';

export const ConnectSSE = () => {
  const queryClient = useQueryClient();

  useEventSource({
    subscribeUrl: `${import.meta.env.VITE_BASE_URL}/alarms/subscribe`,
    eventListenerParameters: [
      [
        'AlarmEvent',
        (e) => {
          invalidateAlarmsQueries(queryClient);
          if ('data' in e) {
            const newAlarm: Alarm = JSON.parse(e.data as string);
            if ('crewId' in newAlarm) {
              invalidateCrewQueries(queryClient, newAlarm);
              toastCrewAlarm(newAlarm);
            } else {
              invalidateGameQueries(queryClient, newAlarm);
              toastGameAlarm(newAlarm);
            }
          }
        },
      ],
    ],
    onerror: (error) => console.log(error),
  });

  return null;
};

const invalidateAlarmsQueries = (queryClient: QueryClient) => {
  queryClient.resetQueries({ queryKey: ['alarms'] });
  queryClient.invalidateQueries({ queryKey: ['alarms-unread'] });
};

const invalidateCrewQueries = (
  queryClient: QueryClient,
  newCrewAlarm: CrewAlarm
) => {
  if (newCrewAlarm.crewAlarmMessage === '가입 수락을 기다리고 있어요') {
    queryClient.invalidateQueries({
      queryKey: ['crew-members', newCrewAlarm.crewId, '대기'],
    });
  } else {
    queryClient.invalidateQueries({
      queryKey: ['crew-detail', newCrewAlarm.crewId],
    });
  }
};

const invalidateGameQueries = (
  queryClient: QueryClient,
  newGameAlarm: GameAlarm
) => {
  if (
    newGameAlarm.gameAlarmMessage === '게스트 모집 참여 수락을 기다리고 있어요'
  ) {
    queryClient.invalidateQueries({
      queryKey: ['game-members', newGameAlarm.gameId, '대기'],
    });
  } else {
    queryClient.invalidateQueries({
      queryKey: ['game-detail', newGameAlarm.gameId],
    });
  }
};

const toastCrewAlarm = (newCrewAlarm: CrewAlarm) => {
  toast(() => <CrewNotificationItem alarm={newCrewAlarm} />, {
    style: { padding: 0 },
    duration: 4000,
  });
};

const toastGameAlarm = (newGameAlarm: GameAlarm) => {
  toast(() => <GameNotificationItem alarm={newGameAlarm} />, {
    style: { padding: 0 },
    duration: 4000,
  });
};
