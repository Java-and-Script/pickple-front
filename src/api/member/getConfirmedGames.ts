import { axiosInstance } from '@api/axiosInstance';

import {
  GetConfirmedGamesRequest,
  GetConfirmedGamesResponse,
} from '@type/api/member';

export const getConfirmedGames = async ({
  memberId,
}: GetConfirmedGamesRequest) => {
  const { data } = await axiosInstance.get<GetConfirmedGamesResponse>(
    `/members/${memberId}/confirmed-games`,
    {}
  );

  return data;
};
