import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getAlarms } from '@api/alarms/getAlarms';

import { FETCH_SIZE } from '@consts/network';

export const useAlarmsQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ['alarms'],
    queryFn: ({ pageParam }) =>
      getAlarms({
        cursorId: pageParam !== 0 ? pageParam : undefined,
        size: FETCH_SIZE,
      }),

    getNextPageParam: (lastPage) => {
      return lastPage.cursorId;
    },
    initialPageParam: 0,
  });
};
