import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { patchAlarms } from '@api/alarms/patchAlarms';

import { GetAlarmsResponse } from '@type/api/alarm';

export const useAlarmsPatchMutation = (alarmId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['alarms', alarmId],
    mutationFn: () => patchAlarms(alarmId),
    onSuccess: () => {
      const previousAlarms = queryClient.getQueryData<
        InfiniteData<GetAlarmsResponse, unknown>
      >(['alarms']);

      if (previousAlarms) {
        const { pages, pageParams } = previousAlarms;
        const newPages: GetAlarmsResponse[] = pages.map((page) => {
          const alarm = page.alarms.find((alarm) => alarm.id === alarmId);
          if (!alarm) {
            return page;
          } else {
            return {
              ...page,
              alarms: page.alarms.map((alarm) => {
                if (alarm.id === alarmId) {
                  return { ...alarm, status: 'read' };
                } else {
                  return alarm;
                }
              }),
            };
          }
        });
        queryClient.setQueryData<unknown, string[], typeof previousAlarms>(
          ['alarms'],
          { pageParams, pages: newPages }
        );
      }
    },
  });
};
