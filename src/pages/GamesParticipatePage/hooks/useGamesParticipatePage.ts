import { useNavigate } from 'react-router-dom';

import { LoginRequireError } from '@routes/LoginRequireBoundary';

import { useConfirmGamesQuery } from '@hooks/member/useConfirmGamesQuery';
import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PATH_NAME } from '@constants/pathName';

export const useGamesParticipatePage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  if (!loginInfo?.id) {
    throw new LoginRequireError();
  }
  const { entryRef: titleRef, showHeaderTitle } =
    useHeaderTitle<HTMLDivElement>();

  const { data: confirmedGames } = useConfirmGamesQuery({
    memberId: loginInfo.id,
  });

  const navigate = useNavigate();
  const navigateToDetailPage = (gameId: number) =>
    navigate(PATH_NAME.GET_GAMES_REVIEW_PATH(String(gameId)));

  return { titleRef, showHeaderTitle, confirmedGames, navigateToDetailPage };
};
