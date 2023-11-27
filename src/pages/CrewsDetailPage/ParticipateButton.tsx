import { Button } from '@components/shared/Button';

import { useCrewRegistrationStatusQuery } from '@hooks/queries/useCrewRegistrationStatusQuery';

import { theme } from '@styles/theme';

export const ParticipateButton = ({
  memberId,
  crewId,
  onClick,
}: {
  memberId: number;
  crewId: number;
  onClick: VoidFunction;
}) => {
  const {
    data: { registrationStatus },
  } = useCrewRegistrationStatusQuery({ memberId, crewId });

  if (registrationStatus) {
    return null;
  }

  return (
    <Button
      {...theme.BUTTON_PROPS.LARGE_RED_BUTTON_PROPS}
      height="50px"
      width="100%"
      onClick={onClick}
    >
      참여 신청하기
    </Button>
  );
};
