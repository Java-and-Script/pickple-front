import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { useGameParticipateCreateMutation } from '@hooks/mutations/useGameParticipateCreateMutation';
import { useGameRegistrationStatusQuery } from '@hooks/queries/useGameRegistrationStatusQuery';

import { PATH_NAME } from '@consts/pathName';

import { BottomButton } from './BottomButton';

type GuestButtonProps = {
  loginId: number;
  gameId: number;
  isStarted: boolean;
  isEnded: boolean;
  vacancy: boolean;
};

export const GuestButton = ({
  loginId,
  gameId,
  isStarted,
  isEnded,
  vacancy,
}: GuestButtonProps) => {
  const isContinue = isStarted && !isEnded;
  const navigate = useNavigate();

  const {
    data: { memberRegistrationStatus },
  } = useGameRegistrationStatusQuery({ memberId: loginId, gameId });
  const { mutate: participateMutate } = useGameParticipateCreateMutation();

  if (isContinue) {
    return null;
  }

  const navigateReviewPage = () =>
    navigate(PATH_NAME.GET_GAMES_REVIEW_PATH(String(gameId)));

  const handleParticipateButtonClick = () =>
    participateMutate(
      { gameId },
      {
        onSuccess: () => {
          toast('참여 신청되었습니다');
        },
      }
    );

  if (isEnded) {
    if (memberRegistrationStatus === '확정') {
      return (
        <BottomButton onClick={navigateReviewPage}>리뷰 남기기</BottomButton>
      );
    }
    return null;
  }

  if (vacancy && memberRegistrationStatus === '없음') {
    return (
      <BottomButton onClick={handleParticipateButtonClick}>
        참여 신청하기
      </BottomButton>
    );
  }

  if (vacancy && memberRegistrationStatus === '대기') {
    return (
      <BottomButton onClick={() => toast('준비중인 기능입니다')}>
        참여 취소하기
      </BottomButton>
    );
  }

  return null;
};
