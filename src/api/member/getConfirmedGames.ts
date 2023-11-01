///members/{memberId}/confirmed-games
import { axiosInstance } from '@api/axiosInstance';

import {
  GetConfiremdGamesRequest,
  GetConfiremdGamesResponse,
} from '@type/api/member';

export const getConfirmedGames = async ({
  memberId,
}: GetConfiremdGamesRequest) => {
  const { data } = await axiosInstance.get<GetConfiremdGamesResponse>(
    `/members/${memberId}/confirmed-games`,
    {}
  );

  return data;
};
