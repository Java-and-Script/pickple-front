import { axiosInstance } from '@api/axiosInstance';

import {
  GetGameRegistrationStatusRequest,
  GetGameRegistrationStatusResponse,
} from '@type/api/member';

export const getGameRegistrationStatus = async ({
  memberId,
  gameId,
}: GetGameRegistrationStatusRequest) => {
  const { data } = await axiosInstance.get<GetGameRegistrationStatusResponse>(
    `/members/${memberId}/games/${gameId}/registration-status`
  );

  return data;
};
