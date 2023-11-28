import { axiosInstance } from '@api/axiosInstance';

export const patchGameAlarms = async (alarmId: number) => {
  await axiosInstance.patch(`/game-alarms/${alarmId}`, {
    isRead: true,
  });
};
