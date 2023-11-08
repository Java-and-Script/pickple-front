import { useParams } from 'react-router-dom';

import { Header } from '@components/Header';
import { Participation } from '@components/Participation/Participation';
import { ManageContainer } from '@components/Participation/Participation.style';

import { useAllowCrewParticipateMutation } from '@hooks/mutations/useAllowCrewParticipateMutation';
import { useDisallowCrewParticipateMutation } from '@hooks/mutations/useDisallowCrewParticipateMutation';
import { useCrewMembersQuery } from '@hooks/queries/useCrewMembersQuery';

export const CrewsManageParticipatePage = () => {
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

  return (
    <ManageContainer>
      <Header isLogo={false} title={name} isRightContainer={true} />
      <Participation
        id={leaderId}
        waitingMembers={waitingMembers}
        handleGuestAction={handleGuestAction}
      />
    </ManageContainer>
  );
};
