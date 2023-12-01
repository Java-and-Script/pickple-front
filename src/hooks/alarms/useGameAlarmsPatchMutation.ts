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
            if (!('gameAlarmId' in alarm)) {
              return false;
            }
            return alarm.gameAlarmId === alarmId;
          });
          if (!alarm) {
            return page;
          }
          return {
            ...page,
            alarmResponse: page.alarmResponse.map((alarm) => {
              if (!('gameAlarmId' in alarm)) {
                return alarm;
              }
              if (alarm.gameAlarmId === alarmId) {
                return { ...alarm, isRead: true };
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
