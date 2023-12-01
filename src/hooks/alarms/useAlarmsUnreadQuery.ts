import { useSuspenseQuery } from '@tanstack/react-query';

import { getAlarmsUnread } from '@api/alarms/getAlarmsUnread';

export const useAlarmsUnreadQuery = () => {
  return useSuspenseQuery({
    queryKey: ['alarms-unread'],
    queryFn: getAlarmsUnread,
  });
};
