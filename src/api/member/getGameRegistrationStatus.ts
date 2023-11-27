import { axiosInstance } from '@api/axiosInstance';

import {
  GetGameRegistrationStatusRequest,
  GetRegistrationStatusResponse,
} from '@type/api/member';

export const getGameRegistrationStatus = async ({
  memberId,
  gameId,
}: GetGameRegistrationStatusRequest) => {
  const { data } = await axiosInstance.get<GetRegistrationStatusResponse>(
    `/members/${memberId}/games/${gameId}/registration-status`
  );

  return data;
};
