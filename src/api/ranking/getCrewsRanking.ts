import { axiosInstance } from '@api/axiosInstance';

import { GetCrewsRankingResponse } from '@type/models/Ranking';

export const getCrewsRanking = async () => {
  const { data } =
    await axiosInstance.get<GetCrewsRankingResponse>('/ranking/crews');

  return data;
};
