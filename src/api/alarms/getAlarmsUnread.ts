import { axiosInstance } from '@api/axiosInstance';

import { GetAlarmsUnreadResponse } from '@type/api/alarm';

export const getAlarmsUnread = async () => {
  const { data } =
    await axiosInstance.get<GetAlarmsUnreadResponse>('/alarms/unread');

  return data;
};
