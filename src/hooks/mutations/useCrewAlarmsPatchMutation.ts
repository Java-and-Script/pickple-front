import {
  InfiniteData,
  QueryKey,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { patchCrewAlarms } from '@api/alarms/patchCrewAlarms';

import { GetAlarmsResponse } from '@type/api/alarm';

export const useCrewAlarmsPatchMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (alarmId: number) => patchCrewAlarms(alarmId),
    onSuccess: (_, alarmId) => {
      queryClient.invalidateQueries({ queryKey: ['alarms-unread'] });

      const previousAlarms = queryClient.getQueryData<
        InfiniteData<GetAlarmsResponse, number>
      >(['alarms']);

      if (previousAlarms) {
        const { pages, pageParams } = previousAlarms;
        const newPages: GetAlarmsResponse[] = pages.map((page) => {
          const alarm = page.alarmResponse.find((alarm) => {
            if (!('crewId' in alarm)) {
              return false;
            }
            return alarm.crewId === alarmId;
          });
          if (!alarm) {
            return page;
          }
          return {
            ...page,
            alarmResponse: page.alarmResponse.map((alarm) => {
              if (!('crewId' in alarm)) {
                return alarm;
              }
              if (alarm.crewId === alarmId) {
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
