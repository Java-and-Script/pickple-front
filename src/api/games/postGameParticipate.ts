import { axiosInstance } from '@api/axiosInstance';

import { PostGameParticipateRequest } from '@type/api/games';
import { Game } from '@type/models';

export const postGameParticipate = async ({
  payload,
  gameId,
}: {
  payload: PostGameParticipateRequest;
  gameId: Game['id'];
}) => {
  await axiosInstance.post(`/games/${gameId}/members`, {
    data: payload,
  });
};
