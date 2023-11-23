import { axiosInstance } from '@api/axiosInstance';

import { PositionInfo } from '@type/models/Position';

export const getPositions = async () => {
  const { data } = await axiosInstance.get<PositionInfo[]>('/positions');
  return data;
};
