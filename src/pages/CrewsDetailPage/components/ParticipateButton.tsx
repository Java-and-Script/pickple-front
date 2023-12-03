import toast from 'react-hot-toast';

import { Button } from '@components/shared/Button';

import { useCrewParticipateCreateMutation } from '@hooks/crews/useCrewParticipateCreateMutation';
import { useCrewRegistrationStatusQuery } from '@hooks/member/useCrewRegistrationStatusQuery';

import { theme } from '@styles/theme';

export const ParticipateButton = ({
  loginId,
  crewId,
  vacancy,
}: {
  loginId: number;
  crewId: number;
  vacancy: boolean;
}) => {
  const {
    data: { memberRegistrationStatus },
  } = useCrewRegistrationStatusQuery({ memberId: loginId, crewId });
  const { mutate: participateMutate } = useCrewParticipateCreateMutation();

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
      <Button
        {...theme.BUTTON_PROPS.LARGE_RED_BUTTON_PROPS}
        height="50px"
        width="100%"
        onClick={() =>
          participateMutate(
            { crewId },
            {
              onSuccess: () => {
                toast('가입 신청되었습니다');
              },
            }
          )
        }
      >
        참여 신청하기
      </Button>
    );
  }

  if (memberRegistrationStatus === '대기') {
    <Button
      {...theme.BUTTON_PROPS.LARGE_RED_BUTTON_PROPS}
      height="50px"
      width="100%"
      onClick={() => toast('준비중인 기능입니다')}
    >
      참여 취소하기
    </Button>;
  }

  return null;
};
