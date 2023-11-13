import { useParams } from 'react-router-dom';

import { Header } from '@components/Header';
import { ManageContainer, Participation } from '@components/Participation';

import { useAllowGameParticipateMutation } from '@hooks/mutations/useAllowGameParticipateMutation';
import { useRefuseGameParticipateMutation } from '@hooks/mutations/useDisallowGameParticipateMutation';
import { useGameMembersQuery } from '@hooks/queries/useGameMembersQuery';

export const GamesManageParticipatePage = () => {
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

  return (
    <ManageContainer>
      <Header
        isLogo={false}
        title={playDate.split('-').splice(1, 2).join('.') + ' ' + addressDepth2}
        isRightContainer={true}
      />
      <Participation
        id={hostId}
        waitingMembers={waitingMembers}
        handleGuestAction={handleGuestAction}
      />
    </ManageContainer>
  );
};
