import { axiosInstance } from '@api/axiosInstance';

import { Position } from '@type/models/Position';

export const getPositions = async () => {
  const { data } = await axiosInstance.get<Position>('/positions');
  return data;
};
