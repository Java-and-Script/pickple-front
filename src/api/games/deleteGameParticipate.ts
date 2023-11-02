import { axiosInstance } from '@api/axiosInstance';

import { DeleteGameParticipateRequest } from '@type/api/games';

export const deleteGameParticipate = async ({
  gameId,
  memberId,
}: DeleteGameParticipateRequest) => {
  await axiosInstance.delete(`/games/${gameId}/members/${memberId}`, {});
};
