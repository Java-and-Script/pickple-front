import { useParams } from 'react-router-dom';

import { useAllowCrewParticipateMutation } from '@hooks/crews/useAllowCrewParticipateMutation';
import { useCrewMembersQuery } from '@hooks/crews/useCrewMembersQuery';
import { useDisallowCrewParticipateMutation } from '@hooks/crews/useDisallowCrewParticipateMutation';

export const useCrewsManageParticipatePage = () => {
  const { id } = useParams();
  const crewId = Number(id);

  const {
    data: {
      name,
      members: waitingMembers,
      leader: { id: leaderId },
    },
  } = useCrewMembersQuery({
    crewId,
    status: '대기',
  });

  const { mutate: allowMutate } = useAllowCrewParticipateMutation();
  const { mutate: refuseMutate } = useDisallowCrewParticipateMutation();

  const handleGuestAction = (memberId: number, action: '확정' | '거절') => {
    if (action === '확정') {
      allowMutate({
        status: '확정',
        memberId,
        crewId,
      });
    } else {
      refuseMutate({ memberId, crewId });
    }
  };

  return { name, waitingMembers, leaderId, handleGuestAction };
};
