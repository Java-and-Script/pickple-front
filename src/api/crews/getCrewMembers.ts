import { axiosInstance } from '@api/axiosInstance';

import {
  GetCrewParticipateListRequest,
  GetCrewParticipateListResponse,
} from '@type/api/crews';

export const getCrewMembers = async ({
  crewId,
  status,
}: GetCrewParticipateListRequest) => {
  const { data } = await axiosInstance.get<GetCrewParticipateListResponse>(
    `/crews/${crewId}/members`,
    {
      params: { status },
    }
  );

  return data;
};
