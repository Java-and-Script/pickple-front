import { axiosInstance } from '@api/axiosInstance';

import {
  GetNearCrewListRequest,
  GetNearCrewListResponse,
} from '@type/api/crews';

export const getNearCrewList = async (params: GetNearCrewListRequest) => {
  const { data } = await axiosInstance.get<GetNearCrewListResponse>('/crews', {
    params,
  });

  return data;
};
