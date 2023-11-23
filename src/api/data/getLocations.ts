import { axiosInstance } from '@api/axiosInstance';

import { Location } from '@type/models/Location';

export const getLocations = async () => {
  const { data } = await axiosInstance.get<Location>('/address');
  return data;
};
