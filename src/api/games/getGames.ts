import { axiosInstance } from '@api/axiosInstance';

import { GetGamesResponse } from '@type/api/games';

export const getGames = async ({
  category,
  value,
  page,
  size,
}: {
  category?: string;
  value?: string;
  page: number;
  size: number;
}) => {
  const { data } = await axiosInstance.get<GetGamesResponse>('/api/games', {
    params: { category, value, page, size },
  });

  return data;
};
