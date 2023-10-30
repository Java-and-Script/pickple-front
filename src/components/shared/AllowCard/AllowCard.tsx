import { useNavigate } from 'react-router-dom';

import { Avatar } from '@components/shared/Avatar';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { PATH_NAME } from '@consts/pathName';

import { AllowCardContainer, FlexBox } from './AllowCard.style';

type AllowCardProps = {
  player: Player;
};

type Player = {
  id: string;
  nickname: string;
  profileImageUrl: string;
};

const buttonOverlappedProps = {
  width: '3.5rem',
  height: '2.5rem',
  fontSize: theme.FONT_SIZE.MD,
  fontWeight: theme.FONT_WEIGHT.MEDIUM,
  backgroundColor: 'white',
};

export const AllowCard = ({ player }: AllowCardProps) => {
  const navigate = useNavigate();

  const moveToProfile = () => {
    navigate(PATH_NAME.GET_PROFILE_PATH(player.id));
  };

  const handleAllowClick = () => {};

  const handleRejectClick = () => {};

  return (
    <AllowCardContainer>
      <FlexBox>
        <Avatar
          src={player.profileImageUrl}
          size={40}
          onClick={moveToProfile}
        />
        <Text
          size="1rem"
          weight={500}
          lineHeight="40px"
          ellipsis={1}
          onClick={moveToProfile}
        >
          {player.nickname}
        </Text>
      </FlexBox>
      <FlexBox>
        <Button
          text="수락"
          textColor={theme.PALETTE.RED_400}
          borderColor={theme.PALETTE.RED_400}
          handleClick={handleAllowClick}
          {...buttonOverlappedProps}
        />
        <Button
          text="거절"
          textColor={theme.PALETTE.GRAY_400}
          borderColor={theme.PALETTE.GRAY_400}
          handleClick={handleRejectClick}
          {...buttonOverlappedProps}
        />
      </FlexBox>
    </AllowCardContainer>
  );
};
