import { ReactNode } from 'react';

import { Avatar } from '@components/Avatar';
import { Header } from '@components/Header';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Image } from '@components/shared/Image';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { POSITIONS } from '@consts/positions';

import Social from '@assets/follow.svg?react';
import Heart from '@assets/heart.svg?react';

import { MEMBERS_MEMBERID } from '@mocks/data/member';

import {
  BadgeContainer,
  FlexItem,
  Main,
  PositionItem,
  ProfileContainer,
} from './ProfilePage.style';

export const ProfilePage = () => {
  const profileData = MEMBERS_MEMBERID;
  console.log(profileData);

  return (
    <ProfileContainer>
      <Header isLogo={false} isRightContainer={true} />
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
              icon={<Social />}
              count={profileData.mannerScoreCount}
            />
            <NumberedItem text="팔로우" icon={<Heart />} count={0} />
          </Flex>
          <Flex justify="center" gap={40}>
            <EventButton text="팔로우" onClick={() => console.log('팔로우')} />
            <EventButton text="대화하기" onClick={() => console.log('대화')} />
          </Flex>
          <BadgeField category="포지션">
            {POSITIONS.map((position) => (
              <PositionItem>{position}</PositionItem>
            ))}
          </BadgeField>
          <BadgeField category="소속 크루">
            {POSITIONS.map((i) => (
              <PositionItem border="none">
                <Image
                  src="https://heropy.blog/images/screenshot/css-flexible-box/flex-direction.jpg"
                  width="45"
                  alt={i}
                />
              </PositionItem>
            ))}
          </BadgeField>
          <BadgeField category="소속 크루">
            {[1, 1, 1, 1, 11, 2, 3, 3, 3, 3, 1].map((i) => (
              <PositionItem border="none">
                <Image
                  src="https://heropy.blog/images/screenshot/css-flexible-box/flex-direction.jpg"
                  width="45"
                  alt={i + ''}
                />
              </PositionItem>
            ))}
          </BadgeField>
        </FlexItem>
      </Main>
    </ProfileContainer>
  );
};
type BadgeFieldProps = {
  category: string;
  children: ReactNode;
};
const BadgeField = ({ category, children }: BadgeFieldProps) => {
  return (
    <BadgeContainer>
      <Text size="1.2rem" weight={700}>
        {category}
      </Text>
      <Flex gap={10} flexWrap="wrap">
        {children}
      </Flex>
    </BadgeContainer>
  );
};

type EventButtonProps = {
  text: string;
  onClick: () => void;
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
type NumberedItemProps = {
  text: string;
  count: number;
  icon: ReactNode;
};
export const NumberedItem = ({ text, count, icon }: NumberedItemProps) => {
  return (
    <Flex direction="column" align="center" gap={4}>
      <Text size={12} color={theme.PALETTE.GRAY_400}>
        {text}
      </Text>
      {icon}
      <Text size={16} color={theme.PALETTE.GRAY_400}>
        {count}
      </Text>
    </Flex>
  );
};
