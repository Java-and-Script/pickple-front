import { Avatar } from '@components/Avatar';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { Member } from '@type/models';

import { AllowCardContainer, FlexBox, Profile } from './AllowCard.style';

type AllowCardProps = {
  member: Member;
  onClickProfile: () => void;
  onClickAllowButton: () => void;
  onClickDisallowButton: () => void;
};

const buttonOverlappedProps = {
  width: '3.5rem',
  height: '2.5rem',
  fontSize: theme.FONT_SIZE.XS,
  fontWeight: theme.FONT_WEIGHT.MEDIUM,
  backgroundColor: 'white',
};

export const AllowCard = ({
  member,
  onClickProfile,
  onClickAllowButton,
  onClickDisallowButton,
}: AllowCardProps) => {
  return (
    <AllowCardContainer>
      <Profile>
        <Avatar
          src={member.profileImageUrl}
          size={40}
          onClick={onClickProfile}
        />
        <Text
          size={12}
          weight={500}
          lineHeight="40px"
          ellipsis={1}
          onClick={onClickProfile}
        >
          {member.nickname}
        </Text>
      </Profile>
      <FlexBox>
        <Button
          textColor={theme.PALETTE.RED_400}
          borderColor={theme.PALETTE.RED_400}
          onClick={onClickAllowButton}
          {...buttonOverlappedProps}
        >
          수락
        </Button>
        <Button
          textColor={theme.PALETTE.GRAY_400}
          borderColor={theme.PALETTE.GRAY_400}
          onClick={onClickDisallowButton}
          {...buttonOverlappedProps}
        >
          거절
        </Button>
      </FlexBox>
    </AllowCardContainer>
  );
};
