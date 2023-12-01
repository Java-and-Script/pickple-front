import { useParams } from 'react-router-dom';

import { useAllowGameParticipateMutation } from '@hooks/games/useAllowGameParticipateMutation';
import { useRefuseGameParticipateMutation } from '@hooks/games/useDisallowGameParticipateMutation';
import { useGameMembersQuery } from '@hooks/games/useGameMembersQuery';

export const useGamesManageParticipatePage = () => {
  const { id } = useParams();
  const gameId = Number(id);

  const { mutate: allowMutate } = useAllowGameParticipateMutation();
  const { mutate: refuseMutate } = useRefuseGameParticipateMutation();
  const {
    data: {
      members: waitingMembers,
      host: { id: hostId },
      playDate,
      addressDepth2,
    },
  } = useGameMembersQuery({
    gameId: gameId,
    status: '대기',
  });

  const handleGuestAction = (memberId: number, action: '확정' | '거절') => {
    if (action === '확정') {
      allowMutate({
        payload: { status: '확정' },
        memberId,
        gameId,
      });
    } else {
      refuseMutate({ memberId, gameId });
    }
  };

  return { waitingMembers, hostId, playDate, addressDepth2, handleGuestAction };
};
