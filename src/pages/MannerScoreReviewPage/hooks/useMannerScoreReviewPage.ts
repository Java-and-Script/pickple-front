import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginRequireError } from '@routes/LoginRequireBoundary';

import { useGameDetailQuery } from '@hooks/games/useGameDetailQuery';
import { useMannerScoreReviewPatchMutation } from '@hooks/games/useMannerScoreReviewPatchMutation';
import { useGameRegistrationStatusQuery } from '@hooks/member/useGameRegistrationStatusQuery';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { isReviewPeriod } from '@utils/domain';

export const useMannerScoreReviewPage = () => {
  const navigate = useNavigate();
  const gameId = Number(location.pathname.split('/')[2]);
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  if (!loginInfo?.id) {
    throw new LoginRequireError();
  }

  const { data: gameData } = useGameDetailQuery(gameId);
  const {
    data: { isReviewDone },
  } = useGameRegistrationStatusQuery({ memberId: loginInfo.id, gameId });
  const teammateListInfo = gameData.members.filter(({ id }) => {
    return loginInfo?.id !== id;
  });

  const nowDate = new Date();
  const gameDate = new Date(`${gameData.playDate}T${gameData.playEndTime}`);
  const canReview = isReviewPeriod(
    gameData.playDate,
    gameData.playStartTime,
    gameData.playTimeMinutes
  );
  const exitCode =
    !canReview ||
    isReviewDone ||
    nowDate <= gameDate ||
    teammateListInfo.length === 0;

  const [currentSelectedMemberIndex, setCurrentSelectedMemberIndex] =
    useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [teammateList, setTeammateList] = useState<
    {
      memberId: number;
      mannerScore: -1 | 0 | 1;
    }[]
  >(
    teammateListInfo.map(({ id }) => {
      return {
        memberId: id,
        mannerScore: 0,
      };
    })
  );

  const { mutate } = useMannerScoreReviewPatchMutation({
    payload: {
      mannerScoreReviews: teammateList,
    },
    gameId: gameId,
  });

  const handleToggle = (value: string) => {
    teammateList.splice(currentSelectedMemberIndex, 1, {
      memberId: teammateList[currentSelectedMemberIndex].memberId,
      mannerScore: value === '좋았어요' ? 1 : -1,
    });
    setTeammateList([...teammateList]);
  };

  const handleLeftArrowIconClick = () => {
    if (currentSelectedMemberIndex > 0) {
      setCurrentSelectedMemberIndex(currentSelectedMemberIndex - 1);
    }
  };

  const handleRightArrowIconClick = () => {
    if (currentSelectedMemberIndex < teammateList.length - 1) {
      setCurrentSelectedMemberIndex(currentSelectedMemberIndex + 1);
    }
  };

  useEffect(() => {
    if (exitCode) {
      navigate('/');
    }
  }, []);

  return {
    exitCode,
    teammateList,
    teammateListInfo,
    currentSelectedMemberIndex,
    setCurrentSelectedMemberIndex,
    handleLeftArrowIconClick,
    handleRightArrowIconClick,
    isOpen,
    setIsOpen,
    handleToggle,
    mutate,
    navigate,
    gameId,
  };
};
