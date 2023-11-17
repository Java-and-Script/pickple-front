import { axiosInstance } from '@api/axiosInstance';

import { DeleteAlarmsRequest } from '@type/api/alarm';

export const deleteAlarms = async ({ cursorId, size }: DeleteAlarmsRequest) => {
  await axiosInstance.delete('/alarms', { params: { cursorId, size } });
};
