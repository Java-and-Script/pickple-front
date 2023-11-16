import { axiosInstance } from '@api/axiosInstance';

export const patchCrewAlarms = async (alarmId: number) => {
  await axiosInstance.patch(`/crew-alarm/${alarmId}`, {
    isRead: true,
  });
};
