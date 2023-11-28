import { useNavigate } from 'react-router-dom';

import { PATH_NAME } from '@consts/pathName';

import { BottomButton } from './BottomButton';

type HostButtonProps = {
  gameId: number;
  isStarted: boolean;
  isEnded: boolean;
};

export const HostButton = ({ gameId, isStarted, isEnded }: HostButtonProps) => {
  const navigate = useNavigate();

  const navigateManagePage = () =>
    navigate(PATH_NAME.GET_GAMES_MANAGE_PATH(String(gameId)));

  const navigateReviewPage = () =>
    navigate(PATH_NAME.GET_GAMES_REVIEW_PATH(String(gameId)));

  if (!isStarted) {
    return <BottomButton onClick={navigateManagePage}>매치 관리</BottomButton>;
  }

  if (isEnded) {
    return (
      <BottomButton onClick={navigateReviewPage}>리뷰 남기기</BottomButton>
    );
  }

  return null;
};
