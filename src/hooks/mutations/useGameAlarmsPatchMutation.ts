import { useMutation } from '@tanstack/react-query';

import { patchGameAlarms } from '@api/alarms/patchGameAlarms';

export const useGameAlarmsPatchMutation = () => {
  // const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (alarmId: number) => patchGameAlarms(alarmId),
    // onSuccess: (_, alarmId) => {
    //   const previousAlarms = queryClient.getQueryData<
    //     InfiniteData<GetAlarmsResponse, unknown>
    //   >(['alarms']);

    //   if (previousAlarms) {
    //     const { pages, pageParams } = previousAlarms;
    //     const newPages: GetAlarmsResponse[] = pages.map((page) => {
    //       const alarm = page.alarms.find((alarm) => alarm.id === alarmId);
    //       if (!alarm) {
    //         return page;
    //       } else {
    //         return {
    //           ...page,
    //           alarms: page.alarms.map((alarm) => {
    //             if (alarm.id === alarmId) {
    //               return { ...alarm, status: 'read' };
    //             } else {
    //               return alarm;
    //             }
    //           }),
    //         };
    //       }
    //     });
    //     queryClient.setQueryData<unknown, string[], typeof previousAlarms>(
    //       ['alarms'],
    //       { pageParams, pages: newPages }
    //     );
    //   }
    // },
  });
};
