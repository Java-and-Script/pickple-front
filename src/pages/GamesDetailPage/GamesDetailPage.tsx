import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate, useParams } from 'react-router-dom';

import { Avatar } from '@components/Avatar';
import { Header } from '@components/Header';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Image } from '@components/shared/Image';
import { Text } from '@components/shared/Text';

import { useGameDetailQuery } from '@hooks/queries/useGameDetailQuery';
import { useChatOnButtonClick } from '@hooks/useChatOnButtonClick';
import { usePositionToast } from '@hooks/usePositionToast';

import { theme } from '@styles/theme';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PATH_NAME } from '@consts/pathName';
import { WEEKDAY } from '@consts/weekday';

import { getGameStartDate, isGameEnded, isGameStarted } from '@utils/domain';

import Ball from '@assets/ball.svg';
import GameMember from '@assets/gameMember.svg';
import Money from '@assets/money.svg';

import { GameLocation } from './GameLocation';
import {
  ButtonWrapper,
  GrayText,
  GuestName,
  Guests,
  GuestsContainer,
  InfoItem,
  PageContent,
  PageLayout,
  PositionItemBox,
  TextContainer,
  ToolTipText,
  UserDataWrapper,
} from './GamesDetailPage.styles';
import { GuestButton } from './components/GuestButton';
import { HostButton } from './components/HostButton';

export const GamesDetailPage = () => {
  const { id } = useParams();
  if (id === undefined) {
    throw new Error('"match id" is undefined');
  }

  const navigate = useNavigate();

  const gameId = Number(id);

  const { data: match } = useGameDetailQuery(gameId);

  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  const isMyMatch = match.host.id === loginInfo?.id;
  const startDate = getGameStartDate(match.playDate, match.playStartTime);
  const isStarted = isGameStarted(startDate);
  const isEnded = isGameEnded(startDate, match.playTimeMinutes);
  const isContinue = isStarted && !isEnded;
  const isParticipant = match.members.some(
    (member) => member.id === loginInfo?.id
  );
  const vacancy = match.maxMemberCount - match.memberCount > 0;

  const [year, month, day] = match.playDate.split('-');
  const [hour, min] = match.playStartTime.split(':');
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  const weekday = WEEKDAY[date.getDay()];

  const handleClickMemberProfile = (id: number | string) =>
    navigate(PATH_NAME.GET_PROFILE_PATH(String(id)));

  const { handleClickChattingButton } = useChatOnButtonClick({
    targetId: match.host.id,
    targetNickname: match.host.nickname,
    navigate,
    myId: loginInfo?.id ?? null,
  });
  const { handleClickPosition } = usePositionToast();

  return (
    <PageLayout>
      <Header />
      <PageContent>
        <div>
          <TextContainer>
            <Text size={24} weight={700} nowrap>
              {match.addressDepth1}
            </Text>
            <Text size={24} weight={700} nowrap>
              {match.addressDepth2}
            </Text>
            {isContinue && (
              <ToolTipText nowrap size={16} color={theme.PALETTE.RED_400}>
                경기중
              </ToolTipText>
            )}
            {!isStarted && !isMyMatch && isParticipant && (
              <ToolTipText nowrap size={16} color={theme.PALETTE.RED_400}>
                참여중
              </ToolTipText>
            )}
            {vacancy && !isStarted && !isMyMatch && !isParticipant && (
              <ToolTipText nowrap size={16} color={theme.PALETTE.RED_400}>
                모집중
              </ToolTipText>
            )}
            {isEnded && (
              <ToolTipText nowrap size={16} color={theme.PALETTE.RED_400}>
                종료
              </ToolTipText>
            )}
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
          {loginInfo && !isMyMatch && (
            <Button
              fontWeight={500}
              width="80px"
              height="40px"
              borderColor={theme.PALETTE.GRAY_400}
              backgroundColor="white"
              textColor={theme.PALETTE.GRAY_400}
              onClick={handleClickChattingButton}
            >
              대화하기
            </Button>
          )}
        </UserDataWrapper>
        <Text size={20} weight={700}>
          경기 정보
        </Text>
        <Flex direction="column" gap={5}>
          <Flex gap={20}>
            <GrayText nowrap>위치</GrayText>
            <Flex direction="column">
              <Text>{match.mainAddress}</Text>
              <Text>{match.detailAddress}</Text>
            </Flex>
          </Flex>
          <Flex gap={20}>
            <GrayText nowrap>날짜</GrayText>
            <Text>{`${year}.${month}.${day} ${weekday}요일`}</Text>
          </Flex>
          <Flex gap={20}>
            <GrayText nowrap>시간</GrayText>
            <Text>
              {`${match.playStartTime.slice(0, 5)} ~ 
              ${match.playEndTime.slice(0, 5)} (${
                match.playTimeMinutes / 60
              }h)`}
            </Text>
          </Flex>
          <Flex>
            <GrayText nowrap>선호 포지션</GrayText>
          </Flex>
          <Flex gap={10}>
            {match.positions.map((position) => (
              <PositionItemBox
                key={position}
                onClick={() => handleClickPosition(position)}
              >
                {position}
              </PositionItemBox>
            ))}
          </Flex>
        </Flex>
        <Flex gap={10}>
          <InfoItem>
            <GrayText size={12}>참가비</GrayText>
            <Image width={40} src={Money} alt="money" />
            <Text size={16}>{`${match.cost.toLocaleString()}원`}</Text>
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
        <Text size={20} weight={700}>
          지도로 보기
        </Text>
        <GameLocation match={match} />

        <ButtonWrapper>
          {loginInfo === null && !isStarted && vacancy && (
            <Button
              {...theme.BUTTON_PROPS.LARGE_RED_BUTTON_PROPS}
              height="50px"
              width="100%"
              onClick={() => navigate(PATH_NAME.LOGIN)}
            >
              로그인 후 참여 신청하기
            </Button>
          )}
          {loginInfo === null && !isStarted && !vacancy && (
            <Button
              {...theme.BUTTON_PROPS.LARGE_GRAY_OUTLINED_BUTTON_PROPS}
              height="50px"
              width="100%"
            >
              신청 마감
            </Button>
          )}
          <ErrorBoundary fallback={<></>}>
            {loginInfo?.id && isMyMatch && (
              <HostButton
                gameId={gameId}
                isStarted={isStarted}
                isEnded={isEnded}
              />
            )}
            {loginInfo?.id && !isMyMatch && (
              <GuestButton
                loginId={loginInfo.id}
                gameId={gameId}
                isStarted={isStarted}
                isEnded={isEnded}
                vacancy={vacancy}
              />
            )}
          </ErrorBoundary>
        </ButtonWrapper>
      </PageContent>
    </PageLayout>
  );
};
