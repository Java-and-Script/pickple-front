import { Header } from '@components/Header';
import { ManageContainer, Participation } from '@components/Participation';

import { useCrewsManageParticipatePage } from './hooks/useCrewsManageParticipatePage';

export const CrewsManageParticipatePage = () => {
  const { name, waitingMembers, leaderId, handleGuestAction } =
    useCrewsManageParticipatePage();

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
