import toast from 'react-hot-toast';

import { QueryClient, useQueryClient } from '@tanstack/react-query';

import { CrewNotificationItem } from '@pages/NotificationPage/components/CrewNotificationItem';
import { GameNotificationItem } from '@pages/NotificationPage/components/GameNotificationItem';

import { useEventSource } from '@hooks/useEventSource';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { Alarm, CrewAlarm, GameAlarm } from '@type/models';

export const ConnectSSE = () => {
  const queryClient = useQueryClient();
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  useEventSource({
    subscribeUrl: `${import.meta.env.VITE_BASE_URL}/alarms/subscribe`,
    eventListenerParameters: [
      [
        'AlarmEvent',
        (e) => {
          if (!loginInfo?.id) {
            return;
          }
          invalidateAlarmsQueries(queryClient);
          if ('data' in e) {
            const newAlarm: Alarm = JSON.parse(e.data as string);
            if ('crewId' in newAlarm) {
              invalidateCrewQueries(loginInfo?.id, queryClient, newAlarm);
              toastCrewAlarm(newAlarm);
            } else {
              invalidateGameQueries(loginInfo?.id, queryClient, newAlarm);
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
  loginId: number,
  queryClient: QueryClient,
  newCrewAlarm: CrewAlarm
) => {
  queryClient.invalidateQueries({
    queryKey: ['crew-members', newCrewAlarm.crewId, '대기'],
  });
  queryClient.invalidateQueries({
    queryKey: ['crew-detail', newCrewAlarm.crewId],
  });
  queryClient.invalidateQueries({
    queryKey: ['crew-registration', loginId, newCrewAlarm.crewId],
  });
};

const invalidateGameQueries = (
  loginId: number,
  queryClient: QueryClient,
  newGameAlarm: GameAlarm
) => {
  queryClient.invalidateQueries({
    queryKey: ['game-members', newGameAlarm.gameId, '대기'],
  });
  queryClient.invalidateQueries({
    queryKey: ['game-detail', newGameAlarm.gameId],
  });
  queryClient.invalidateQueries({
    queryKey: ['game-registration', loginId, newGameAlarm.gameId],
  });
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
