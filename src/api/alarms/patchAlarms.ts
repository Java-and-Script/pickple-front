import { axiosInstance } from '@api/axiosInstance';

export const patchAlarms = async (alarmId: number) => {
  await axiosInstance.patch(`/alarms/${alarmId}`, {
    isRead: 'read',
  });
};
