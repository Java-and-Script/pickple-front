import { ReactNode } from 'react';

import { Avatar } from '@components/Avatar';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Image } from '@components/shared/Image';
import { Text } from '@components/shared/Text';

import { useMemberProfileQuery } from '@hooks/queries/useMemberProfileQuery';

import { theme } from '@styles/theme';

import { Member } from '@type/models';

import Social from '@assets/follow.svg?react';
import Heart from '@assets/heart.svg?react';

import {
  ColoredSvgWrapper,
  FlexItem,
  Introduce,
  ItemBox,
  Main,
  ProfileFieldContainer,
} from './ProfilePage.style';

type ProfileFieldProps = {
  category: string;
  children: ReactNode;
};

type EventButtonProps = {
  text: string;
  onClick: () => void;
};

type NumberedItemProps = {
  text: string;
  count: number;
  icon: ReactNode;
  color?: string;
};

export const Profile = ({ memberId }: { memberId: Member['id'] }) => {
  const { data: profileData } = useMemberProfileQuery({ memberId });

  return (
    <Main>
      <FlexItem>
        <Text size={24}>{profileData.nickname}</Text>
        <Flex justify="center" gap={40} align="center">
          <Avatar
            src={profileData.profileImageUrl}
            size={100}
            border={`1px solid ${theme.PALETTE.GRAY_400}`}
          />
          <NumberedItem
            text="매너스코어"
            icon={<Heart />}
            count={profileData.mannerScoreCount}
            color="pink"
          />
          <NumberedItem text="팔로우" icon={<Social />} count={0} />
        </Flex>
        <Flex justify="center" gap={10}>
          <EventButton text="팔로우" onClick={() => console.log('팔로우')} />
          <EventButton text="대화하기" onClick={() => console.log('대화')} />
        </Flex>
        <ProfileField category="포지션">
          {profileData.positions.length
            ? profileData.positions.map((position) => (
                <ItemBox key={position}>{position}</ItemBox>
              ))
            : '없음'}
        </ProfileField>
        <ProfileField category="소속 크루">
          {profileData.crews.length
            ? profileData.crews.map((crew) => (
                <ItemBox border="none" key={crew.id}>
                  <Image
                    src={crew.profileImageUrl}
                    width="45"
                    alt={crew.name}
                  />
                </ItemBox>
              ))
            : '없음'}
        </ProfileField>
        <ProfileField category="획득한 뱃지">{'없음'}</ProfileField>
        <ProfileField category="자기소개">
          <Introduce>
            <Text>{profileData.introduction}</Text>
          </Introduce>
        </ProfileField>
      </FlexItem>
    </Main>
  );
};

const ProfileField = ({ category, children }: ProfileFieldProps) => {
  return (
    <ProfileFieldContainer>
      <Text size="1.2rem" weight={700}>
        {category}
      </Text>
      <Flex gap={10} flexWrap="wrap">
        {children}
      </Flex>
    </ProfileFieldContainer>
  );
};

const EventButton = ({ text, onClick }: EventButtonProps) => (
  <Button
    width="160px"
    height="32px"
    backgroundColor="white"
    textColor={theme.PALETTE.GRAY_400}
    borderColor={theme.PALETTE.GRAY_400}
    fontWeight={theme.PALETTE.MEDIUM}
    onClick={onClick}
  >
    <Text size={11} color={theme.PALETTE.GRAY_400}>
      {text}
    </Text>
  </Button>
);

const NumberedItem = ({ text, count, icon, color }: NumberedItemProps) => {
  return (
    <Flex direction="column" align="center" gap={4}>
      <Text size={12} color={theme.PALETTE.GRAY_400}>
        {text}
      </Text>
      <ColoredSvgWrapper color={color}>{icon}</ColoredSvgWrapper>
      <Text size={16} color={theme.PALETTE.GRAY_400}>
        {count}
      </Text>
    </Flex>
  );
};
