import { axiosInstance } from '@api/axiosInstance';

import { GetGameMembersResponse } from '@type/api/games';
import { Game } from '@type/models';

export type getGameMembersProps = {
  gameId: Game['id'];
  status: '대기' | '확정';
};

export const getGameMembers = async ({
  gameId,
  status,
}: getGameMembersProps) => {
  const { data } = await axiosInstance.get<GetGameMembersResponse>(
    `/games/${gameId}/members`,
    {
      params: { status },
    }
  );

  return data;
};
