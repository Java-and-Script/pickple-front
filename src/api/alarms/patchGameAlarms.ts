import { axiosInstance } from '@api/axiosInstance';

export const patchGameAlarms = async (alarmId: number) => {
  await axiosInstance.patch(`/game-alarm/${alarmId}`, {
    isRead: true,
  });
};
