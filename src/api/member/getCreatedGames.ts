////members/{memberId}/created-games
import { axiosInstance } from '@api/axiosInstance';

import {
  GetCreatedGamesRequest,
  GetCreatedGamesResponse,
} from '@type/api/member';

export const getCreatedGames = async ({ memberId }: GetCreatedGamesRequest) => {
  const { data } = await axiosInstance.get<GetCreatedGamesResponse>(
    `/members/${memberId}/created-games`,
    {}
  );

  return data;
};
