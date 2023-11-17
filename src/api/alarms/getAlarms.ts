import { axiosInstance } from '@api/axiosInstance';

import { GetAlarmsRequest, GetAlarmsResponse } from '@type/api/alarm';

export const getAlarms = async ({ cursorId, size }: GetAlarmsRequest) => {
  const { data } = await axiosInstance.get<GetAlarmsResponse>('/alarms', {
    params: {
      cursorId,
      size,
    },
  });

  return data;
};
