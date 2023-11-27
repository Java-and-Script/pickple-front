import { axiosInstance } from '@api/axiosInstance';

import {
  GetCrewRegistrationStatusRequest,
  GetRegistrationStatusResponse,
} from '@type/api/member';

export const getCrewRegistrationStatus = async ({
  memberId,
  crewId,
}: GetCrewRegistrationStatusRequest) => {
  const { data } = await axiosInstance.get<GetRegistrationStatusResponse>(
    `/members/${memberId}/crews/${crewId}/registration-status`
  );

  return data;
};
