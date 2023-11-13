import { axiosInstance } from '@api/axiosInstance';

import { GetCrewDetailRequest, GetCrewDetailResponse } from '@type/api/crews';

export const getCrewDetail = async ({ crewId }: GetCrewDetailRequest) => {
  const { data } = await axiosInstance.get<GetCrewDetailResponse>(
    `/crews/${crewId}`
  );

  return data;
};
