import { axiosInstance } from '@api/axiosInstance';

import { GetConfirmedGamesRequest } from '@type/api/member';

export const getConfirmedGames = async ({
  memberId,
}: GetConfirmedGamesRequest) => {
  const { data } = await axiosInstance.get<GetConfirmedGamesRequest>(
    `/members/${memberId}/confirmed-games`,
    {}
  );

  return data;
};
