import { axiosInstance } from '@api/axiosInstance';

import { GetGameMembersResponse } from '@type/api/games';
import { Game } from '@type/models';

export const getGameMembers = async ({
  gameId,
  status,
}: {
  gameId: Game['id'];
  status: '대기' | '확정';
}) => {
  const { data } = await axiosInstance.get<GetGameMembersResponse>(
    `/api/games/${gameId}/members`,
    {
      params: { status },
    }
  );

  return data;
};
