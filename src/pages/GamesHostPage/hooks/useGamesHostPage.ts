import { useNavigate } from 'react-router-dom';

import { LoginRequireError } from '@routes/LoginRequireBoundary';

import { useCreatedGamesQuery } from '@hooks/member/useCreatedGamesQuery';
import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { useLoginInfoStore } from '@stores/loginInfo.store';

export const useGamesHostPage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  if (!loginInfo?.id) {
    throw new LoginRequireError();
  }
  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();

  const { data: createdGames } = useCreatedGamesQuery({
    memberId: loginInfo.id,
  });

  const navigate = useNavigate();

  return { entryRef, showHeaderTitle, createdGames, navigate };
};
