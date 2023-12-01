import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components/shared/Button';

import { useGameParticipateCreateMutation } from '@hooks/games/useGameParticipateCreateMutation';
import { useGameRegistrationStatusQuery } from '@hooks/member/useGameRegistrationStatusQuery';

import { theme } from '@styles/theme';

import { PATH_NAME } from '@constants/pathName';

import { BottomButton } from './BottomButton';

type GuestButtonProps = {
  loginId: number;
  gameId: number;
  isStarted: boolean;
  isEnded: boolean;
  vacancy: boolean;
  isReviewPeriod: boolean;
};

export const GuestButton = ({
  loginId,
  gameId,
  isStarted,
  isEnded,
  vacancy,
  isReviewPeriod,
}: GuestButtonProps) => {
  const isContinue = isStarted && !isEnded;
  const navigate = useNavigate();

  const {
    data: { memberRegistrationStatus, isReviewDone },
  } = useGameRegistrationStatusQuery({ memberId: loginId, gameId });
  const { mutate: participateMutate } = useGameParticipateCreateMutation();

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

  if (isContinue) {
    return null;
  }

  if (isEnded) {
    if (
      isReviewPeriod &&
      memberRegistrationStatus === '확정' &&
      !isReviewDone
    ) {
      return (
        <BottomButton onClick={navigateReviewPage}>리뷰 남기기</BottomButton>
      );
    }
    return null;
  }

  if (memberRegistrationStatus === '없음' && !vacancy) {
    return (
      <Button
        {...theme.BUTTON_PROPS.LARGE_GRAY_OUTLINED_BUTTON_PROPS}
        height="50px"
        width="100%"
      >
        신청 마감
      </Button>
    );
  }

  if (memberRegistrationStatus === '없음') {
    return (
      <BottomButton onClick={handleParticipateButtonClick}>
        참여 신청하기
      </BottomButton>
    );
  }

  if (memberRegistrationStatus === '대기') {
    return (
      <BottomButton onClick={() => toast('준비중인 기능입니다')}>
        참여 취소하기
      </BottomButton>
    );
  }

  return null;
};
