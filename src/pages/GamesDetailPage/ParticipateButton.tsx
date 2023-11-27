import { Button } from '@components/shared/Button';

import { useGameRegistrationStatusQuery } from '@hooks/queries/useGameRegistrationStatusQuery';

import { theme } from '@styles/theme';

export const ParticipateButton = ({
  memberId,
  gameId,
  onClick,
}: {
  memberId: number;
  gameId: number;
  onClick: VoidFunction;
}) => {
  const {
    data: { registrationStatus },
  } = useGameRegistrationStatusQuery({ memberId, gameId });

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
