import { axiosInstance } from '@api/axiosInstance';

export const deleteAlarms = async () => {
  await axiosInstance.delete('/alarms');
};
