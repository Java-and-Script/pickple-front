import { axiosInstance } from '@api/axiosInstance';

export const patchCrewAlarms = async (alarmId: number) => {
  await axiosInstance.patch(`/crew-alarms/${alarmId}`, {
    isRead: true,
  });
};
