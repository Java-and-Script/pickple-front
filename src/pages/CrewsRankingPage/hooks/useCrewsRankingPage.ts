import { useState } from 'react';
import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import { useCrewsRankingQuery } from '@hooks/ranking/useCrewsRankingQuery';

import { CrewRank } from '@type/models/CrewRank';

import { PATH_NAME } from '@constants/pathName';

export const useCrewsRankingPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCrewRank, setSelectedCrewRank] = useState<CrewRank | null>(
    null
  );

  const { data: crewsRanking } = useCrewsRankingQuery();

  const openModal = (crewRank: CrewRank) => {
    setIsOpen(true);
    setSelectedCrewRank(crewRank);
  };

  const handleDetailButtonClick = () => {
    if (selectedCrewRank) {
      flushSync(() => setIsOpen(false));
      navigate(PATH_NAME.GET_CREWS_PATH(String(selectedCrewRank.id)));
    }
  };

  return {
    isOpen,
    setIsOpen,
    selectedCrewRank,
    crewsRanking,
    openModal,
    handleDetailButtonClick,
  };
};
