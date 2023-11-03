import { useNavigate, useParams } from 'react-router-dom';

import { Avatar } from '@components/Avatar';
import { Header } from '@components/Header';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Image } from '@components/shared/Image';
import { Text } from '@components/shared/Text';

import { useGameParticipateCreateMutation } from '@hooks/mutations/useGameParticipateCreateMutation';
import { useGameDetailQuery } from '@hooks/queries/useGameDetailQuery';

import { theme } from '@styles/theme';

import { PATH_NAME } from '@consts/pathName';
import { WEEKDAY } from '@consts/weekday';

import Ball from '@assets/ball.svg';
import GameMember from '@assets/gameMember.svg';
import Money from '@assets/money.svg';

import {
  GrayText,
  GuestName,
  Guests,
  GuestsContainer,
  InfoItem,
  PageContent,
  PageLayout,
  TextContainer,
  UserDataWrapper,
} from './GamesDetailPage.styles';

export const GamesDetailPage = () => {
  const { id } = useParams();
  if (id === undefined) {
    throw new Error('"match id" is undefined');
  }
  const gameId = Number(id);
  const { data: match } = useGameDetailQuery(gameId);
  const { mutate: participateMutate } = useGameParticipateCreateMutation();

  const [year, month, day] = match.playDate.split('-');
  const [hour, min] = match.playStartTime.split(':');
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  const weekday = WEEKDAY[date.getDay()];

  const navigate = useNavigate();

  const handleClickMemberProfile = (id: number | string) =>
    navigate(PATH_NAME.GET_PROFILE_PATH(String(id)));

  return (
    <PageLayout>
      <Header />
      <PageContent>
        <div>
          <TextContainer>
            <Text size={24} weight={700}>
              {match.addressDepth1}
            </Text>
            <Text size={24} weight={700}>
              {match.addressDepth2}
            </Text>
          </TextContainer>
          <TextContainer>
            <Text size={20} weight={700}>
              {`${month}월 ${day}일 ${weekday}요일 ${hour}시 ${min}분`}
            </Text>
          </TextContainer>
        </div>
        <UserDataWrapper>
          <Flex
            gap={5}
            align="center"
            onClick={() => handleClickMemberProfile(match.host.id)}
          >
            <Avatar
              size={40}
              src={match.host.profileImageUrl}
              border={`1px solid ${theme.PALETTE.GRAY_400}`}
            />
            <Flex direction="column">
              <GrayText size={12}>호스트</GrayText>
              <Text size={16}>{match.host.nickname}</Text>
            </Flex>
          </Flex>
          {/* TODO: 본인일 시 버튼 렌더링 안하게 */}
          {/* TODO: 버튼 클릭 핸들러 */}
          <Button
            fontWeight={500}
            width="80px"
            height="40px"
            borderColor={theme.PALETTE.GRAY_400}
            backgroundColor="white"
            textColor={theme.PALETTE.GRAY_400}
            onClick={() => {}}
          >
            대화하기
          </Button>
        </UserDataWrapper>
        <Text size={20} weight={700}>
          경기 정보
        </Text>
        <Flex direction="column" gap={5}>
          <Flex gap={20}>
            <GrayText>위치</GrayText>
            <Flex direction="column">
              <Text>{match.mainAddress}</Text>
              <Text>{match.detailAddress}</Text>
            </Flex>
          </Flex>
          <Flex gap={20}>
            <GrayText>날짜</GrayText>
            <Text>{`${year}.${month}.${day} ${weekday}요일`}</Text>
          </Flex>
          <Flex gap={20}>
            <GrayText>시간</GrayText>
            <Text>
              {`${match.playStartTime} ~ ${match.playEndTime} (${
                match.playTimeMinutes / 60
              }h)`}
            </Text>
          </Flex>
        </Flex>
        <Flex gap={10}>
          <InfoItem>
            <GrayText size={12}>참가비</GrayText>
            <Image width={40} src={Money} alt="money" />
            <Text size={16}>{`${match.cost}원`}</Text>
          </InfoItem>
          <InfoItem>
            <GrayText size={12}>현재원</GrayText>
            <Image width={40} src={Ball} alt="ball" />
            <Text size={16}>{`${match.memberCount}명`}</Text>
          </InfoItem>
          <InfoItem>
            <GrayText size={12}>정원</GrayText>
            <Image width={40} src={GameMember} alt="member" />
            <Text size={16}>{`${match.maxMemberCount}명`}</Text>
          </InfoItem>
        </Flex>
        <Text size={20} weight={700}>
          경기 소개
        </Text>
        <Text weight={300}>{match.content}</Text>
        <Text size={20} weight={700}>
          참여한 게스트
        </Text>
        <GuestsContainer>
          <Guests gap={10}>
            {match.members.map(({ id, profileImageUrl, nickname }) => (
              <Flex
                direction="column"
                key={id}
                onClick={() => handleClickMemberProfile(id)}
              >
                <Avatar
                  radius="8px"
                  border={`1px solid ${theme.PALETTE.GRAY_200}`}
                  size={60}
                  src={profileImageUrl}
                />
                <GuestName size={12}>{nickname}</GuestName>
              </Flex>
            ))}
          </Guests>
        </GuestsContainer>
        <Button
          {...theme.BUTTON_PROPS.LARGE_RED_BUTTON_PROPS}
          height="50px"
          onClick={() =>
            participateMutate({
              gameId,
              /** TODO: 내 정보 불러와서 내 id로 수정해야함 */
              payload: { memberId: new Date().getTime() - 10000 },
            })
          }
        >
          참여 신청하기
        </Button>
      </PageContent>
    </PageLayout>
  );
};
