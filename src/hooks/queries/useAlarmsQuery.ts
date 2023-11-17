import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getAlarms } from '@api/alarms/getAlarms';

import { FETCH_SIZE } from '@consts/network';

export const useAlarmsQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ['alarms'],
    queryFn: ({ pageParam }) =>
      getAlarms({ cursorId: pageParam, size: FETCH_SIZE }),

    getNextPageParam: (lastPage) => {
      if (!lastPage.hasNext) {
        return undefined;
      }
      return lastPage.alarms[lastPage.alarms.length - 1].id;
    },
    initialPageParam: 0,
  });
};
