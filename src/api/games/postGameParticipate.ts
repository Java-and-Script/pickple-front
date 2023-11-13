import { axiosInstance } from '@api/axiosInstance';

import { Game } from '@type/models';

export const postGameParticipate = async ({
  gameId,
}: {
  gameId: Game['id'];
}) => {
  await axiosInstance.post(`/games/${gameId}/members`);
};
