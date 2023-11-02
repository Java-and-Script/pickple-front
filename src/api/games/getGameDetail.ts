import { axiosInstance } from '@api/axiosInstance';

import { GetGameDetailResponse } from '@type/api/games';
import { Game } from '@type/models';

export const getGameDetail = async ({ gameId }: { gameId: Game['id'] }) => {
  const { data } = await axiosInstance.get<GetGameDetailResponse>(
    `/games/${gameId}`,
    {}
  );

  return data;
};
