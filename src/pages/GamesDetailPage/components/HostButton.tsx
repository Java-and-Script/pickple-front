import { useNavigate } from 'react-router-dom';

import { useGameRegistrationStatusQuery } from '@hooks/queries/useGameRegistrationStatusQuery';

import { PATH_NAME } from '@consts/pathName';

import { BottomButton } from './BottomButton';

type HostButtonProps = {
  loginId: number;
  gameId: number;
  isStarted: boolean;
  isEnded: boolean;
  isReviewPeriod: boolean;
};

export const HostButton = ({
  loginId,
  gameId,
  isStarted,
  isEnded,
  isReviewPeriod,
}: HostButtonProps) => {
  const navigate = useNavigate();
  const {
    data: { isReviewDone },
  } = useGameRegistrationStatusQuery({ memberId: loginId, gameId });

  const navigateManagePage = () =>
    navigate(PATH_NAME.GET_GAMES_MANAGE_PATH(String(gameId)));

  const navigateReviewPage = () =>
    navigate(PATH_NAME.GET_GAMES_REVIEW_PATH(String(gameId)));

  if (!isStarted) {
    return <BottomButton onClick={navigateManagePage}>매치 관리</BottomButton>;
  }

  if (isReviewPeriod && isEnded && !isReviewDone) {
    return (
      <BottomButton onClick={navigateReviewPage}>리뷰 남기기</BottomButton>
    );
  }

  return null;
};
