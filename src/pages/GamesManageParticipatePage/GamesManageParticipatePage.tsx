import { Header } from '@components/Header';
import { ManageContainer, Participation } from '@components/Participation';

import { useGamesManageParticipatePage } from './hooks/useGamesManageParticipatePage';

export const GamesManageParticipatePage = () => {
  const { waitingMembers, hostId, playDate, addressDepth2, handleGuestAction } =
    useGamesManageParticipatePage();

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
