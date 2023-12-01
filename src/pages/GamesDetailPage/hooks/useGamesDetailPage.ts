import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useGameDetailQuery } from '@hooks/games/useGameDetailQuery';
import { useChatOnButtonClick } from '@hooks/useChatOnButtonClick';
import { usePositionToast } from '@hooks/usePositionToast';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PATH_NAME } from '@constants/pathName';

import {
  getGameStartDate,
  isGameEnded,
  isGameStarted,
  isReviewPeriod,
} from '@utils/domain';

export const useGamesDetailPage = () => {
  const { id } = useParams();
  if (id === undefined) {
    throw new Error('"match id" is undefined');
  }

  const gameId = Number(id);
  const navigate = useNavigate();
  const { data: match } = useGameDetailQuery(gameId);
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  const handleClickMemberProfile = (id: number | string) =>
    navigate(PATH_NAME.GET_PROFILE_PATH(String(id)));

  const navigateToLoginPage = () => navigate(PATH_NAME.LOGIN);

  const { handleClickChattingButton } = useChatOnButtonClick({
    targetId: match.host.id,
    targetNickname: match.host.nickname,
    navigate,
    myId: loginInfo?.id ?? null,
  });

  const { handleClickPosition } = usePositionToast();

  const isMyMatch = match.host.id === loginInfo?.id;
  const startDate = getGameStartDate(match.playDate, match.playStartTime);
  const isStarted = isGameStarted(startDate);
  const isEnded = isGameEnded(startDate, match.playTimeMinutes);
  const isContinue = isStarted && !isEnded;
  const isParticipant = match.members.some(
    (member) => member.id === loginInfo?.id
  );
  const vacancy = match.maxMemberCount - match.memberCount > 0;
  const canReview = isReviewPeriod(
    match.playDate,
    match.playStartTime,
    match.playTimeMinutes
  );

  return {
    gameId,
    match,
    loginInfo,
    handleClickMemberProfile,
    handleClickChattingButton,
    handleClickPosition,
    navigateToLoginPage,
    isMyMatch,
    isStarted,
    isEnded,
    isContinue,
    isParticipant,
    vacancy,
    canReview,
  };
};
