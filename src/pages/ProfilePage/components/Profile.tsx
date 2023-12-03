import { ReactNode } from 'react';

import { Avatar } from '@components/Avatar';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Image } from '@components/shared/Image';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { Member } from '@type/models';

import Social from '@assets/follow.svg?react';
import HandHeart from '@assets/handHeart.svg?react';
import Heart from '@assets/heart.svg?react';

import { PointerFlex } from '../ProfilePage.style';
import {
  ColoredSvgWrapper,
  CrewGroup,
  FlexItem,
  Introduce,
  ItemBox,
  Main,
  NumberedItemWrapper,
  ProfileFieldContainer,
} from '../ProfilePage.style';
import { useProfile } from '../hooks/useProfile';

type ProfileFieldProps = {
  category: string;
  children: ReactNode;
};

type EventButtonProps = {
  text: string;
  width?: string;
  onClick: () => void;
};

type NumberedItemProps = {
  text: string;
  count: number;
  icon: ReactNode;
  color?: string;
  onClick?: () => void;
};

export type ProfileProps = {
  memberId: Member['id'];
};

export const Profile = ({ memberId }: ProfileProps) => {
  const {
    myId,
    profile,
    isHeartClicked,
    toastNextUpdate,
    handleClickHeart,
    handleClickChattingButton,
    handleClickPosition,
    handleClickCrew,
  } = useProfile({ memberId });

  return (
    <Main>
      <FlexItem>
        <Flex align="flex-end" gap={8}>
          <Text size={24} lineHeight="">
            {profile.nickname}
          </Text>
          <Text size={12}>
            {profile.addressDepth1 + ' ' + profile.addressDepth2}
          </Text>
        </Flex>
        <Flex justify="center" gap={40} align="center">
          <Avatar
            src={profile.profileImageUrl}
            size={100}
            border={`1px solid ${theme.PALETTE.GRAY_400}`}
          />
          <NumberedItemWrapper
            isClicked={isHeartClicked}
            onClick={handleClickHeart}
          >
            <NumberedItem
              text="매너스코어"
              icon={<Heart />}
              count={profile.mannerScore}
              color="pink"
            />
            <NumberedItem
              text="평가한 사람"
              icon={<HandHeart />}
              count={profile.mannerScoreCount}
              color="black"
            />
          </NumberedItemWrapper>
          <NumberedItem
            text="팔로우"
            icon={<Social />}
            count={0}
            onClick={toastNextUpdate}
          />
        </Flex>
        {myId === memberId ? (
          <EventButton
            text="내 정보 수정"
            width="100%"
            onClick={toastNextUpdate}
          />
        ) : (
          <Flex justify="center" gap={10}>
            <EventButton text="팔로우" onClick={toastNextUpdate} />
            <EventButton text="대화하기" onClick={handleClickChattingButton} />
          </Flex>
        )}
        <ProfileField category="포지션">
          {profile.positions.length
            ? profile.positions.map((position) => (
                <ItemBox
                  key={position}
                  onClick={() => handleClickPosition(position)}
                >
                  {position}
                </ItemBox>
              ))
            : '없음'}
        </ProfileField>
        <ProfileField category="소속 크루">
          <CrewGroup>
            {profile.crews.length
              ? profile.crews.map((crew) => (
                  <ItemBox
                    border="none"
                    key={crew.id}
                    onClick={() => handleClickCrew(crew.id)}
                  >
                    <Image
                      src={crew.profileImageUrl}
                      width="45"
                      alt={crew.name}
                    />
                  </ItemBox>
                ))
              : '없음'}
          </CrewGroup>
        </ProfileField>
        <ProfileField category="자기소개">
          <Introduce>{profile.introduction}</Introduce>
        </ProfileField>
      </FlexItem>
    </Main>
  );
};

export const ProfileField = ({ category, children }: ProfileFieldProps) => {
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

const EventButton = ({ text, width, onClick }: EventButtonProps) => (
  <Button
    width={width ?? '50%'}
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

const NumberedItem = ({
  text,
  count,
  icon,
  color,
  onClick,
}: NumberedItemProps) => {
  return (
    <PointerFlex direction="column" align="center" gap={4} onClick={onClick}>
      <Text size={12} color={theme.PALETTE.GRAY_400}>
        {text}
      </Text>
      <ColoredSvgWrapper color={color}>{icon}</ColoredSvgWrapper>
      <Text size={16} color={theme.PALETTE.GRAY_400}>
        {count}
      </Text>
    </PointerFlex>
  );
};
