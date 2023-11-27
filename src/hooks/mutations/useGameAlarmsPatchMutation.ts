import {
  InfiniteData,
  QueryKey,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { patchGameAlarms } from '@api/alarms/patchGameAlarms';

import { GetAlarmsResponse } from '@type/api/alarm';

export const useGameAlarmsPatchMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (alarmId: number) => patchGameAlarms(alarmId),
    onSuccess: (_, alarmId) => {
      queryClient.invalidateQueries({ queryKey: ['alarms-unread'] });

      const previousAlarms = queryClient.getQueryData<
        InfiniteData<GetAlarmsResponse, number>
      >(['alarms']);

      if (previousAlarms) {
        const { pages, pageParams } = previousAlarms;
        const newPages: GetAlarmsResponse[] = pages.map((page) => {
          const alarm = page.alarmResponse.find((alarm) => {
            if (!('gameId' in alarm)) {
              return false;
            }
            return alarm.gameId === alarmId;
          });
          if (!alarm) {
            return page;
          }
          return {
            ...page,
            alarmResponse: page.alarmResponse.map((alarm) => {
              if (!('gameId' in alarm)) {
                return alarm;
              }
              if (alarm.gameId === alarmId) {
                return { ...alarm, status: 'read' };
              }
              return alarm;
            }),
          };
        });
        queryClient.setQueryData<
          typeof previousAlarms,
          QueryKey,
          typeof previousAlarms
        >(['alarms'], { pageParams, pages: newPages });
      }
    },
  });
};
