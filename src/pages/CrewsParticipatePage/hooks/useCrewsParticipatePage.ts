import { LoginRequireError } from '@routes/LoginRequireBoundary';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { useJoinedCrewsQuery } from './useJoinedCrewsQuery';

export const useCrewsParticipatePage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  if (!loginInfo?.id) {
    throw new LoginRequireError();
  }

  const { data: crews } = useJoinedCrewsQuery({
    memberId: loginInfo.id,
    status: '확정',
  });

  return {
    crews,
  };
};
