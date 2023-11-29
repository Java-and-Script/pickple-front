import toast from 'react-hot-toast';

import { useQueryClient } from '@tanstack/react-query';

import { CrewNotificationItem } from '@pages/NotificationPage/components/CrewNotificationItem';
import { GameNotificationItem } from '@pages/NotificationPage/components/GameNotificationItem';

import { useEventSource } from '@hooks/useEventSource';

import { Alarm } from '@type/models';

export const ConnectSSE = () => {
  const queryClient = useQueryClient();

  useEventSource({
    subscribeUrl: `${import.meta.env.VITE_BASE_URL}/alarms/subscribe`,
    eventListenerParameters: [
      [
        'AlarmEvent',
        (e) => {
          queryClient.resetQueries({ queryKey: ['alarms'] });
          queryClient.invalidateQueries({ queryKey: ['alarms-unread'] });

          if ('data' in e) {
            const newAlarm: Alarm = JSON.parse(e.data as string);
            if ('crewId' in newAlarm) {
              toast(
                (t) => (
                  <CrewNotificationItem
                    alarm={newAlarm}
                    onClick={() => toast.dismiss(t.id)}
                  />
                ),
                { style: { padding: 0 } }
              );
            } else {
              toast(
                (t) => (
                  <GameNotificationItem
                    alarm={newAlarm}
                    onClick={() => toast.dismiss(t.id)}
                  />
                ),
                { style: { padding: 0 } }
              );
            }
          }
        },
      ],
    ],
    onerror: (error) => console.log(error),
  });
  return null;
};
