import { ErrorBoundary } from 'react-error-boundary';

import { Avatar } from '@components/Avatar';
import { Header } from '@components/Header';
import { InfoItem } from '@components/InfoItem';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import Ball from '@assets/ball.svg?react';
import CrewMember from '@assets/gameMember.svg?react';
import Map from '@assets/map.svg?react';

import {
  AvatarWrapper,
  BackgoundImage,
  ButtonWrapper,
  ContentText,
  CrewProfileInfo,
  Crown,
  MemberName,
  MemberWrapper,
  MembersContainer,
  PageContent,
  PageWrapper,
  ProfileImage,
  ToolTipWrapper,
} from './CrewsDetailPage.styles';
import { ParticipateButton } from './components/ParticipateButton';
import { useCrewsDetailPage } from './hooks/useCrewsDetailPage';

/** TODO 좌측 상단에 모집중, 내가 속한 크루, 내가 만든 크루 툴팁 보여주기 */
export const CrewsDetailPage = () => {
  const {
    loginInfo,
    crew,
    isMyCrew,
    isParticipant,
    vacancy,
    handleClickMemberProfile,
    navigateToManagePage,
    navigateToLoginPage,
  } = useCrewsDetailPage();

  return (
    <PageWrapper>
      <Header />
      <PageContent direction="column" gap={20}>
        <CrewProfileInfo direction="column" align="center" justify="end">
          <BackgoundImage
            src={crew.backgroundImageUrl}
            alt="crew-background"
            width="100dvw"
            height="calc(100dvw * 10 / 16)"
          />
          <ProfileImage
            src={crew.profileImageUrl}
            alt="crew-profile"
            width={80}
          />
          <Text>{crew.name}</Text>
          {isMyCrew && (
            <ToolTipWrapper>
              <Text>내가 만든 크루</Text>
            </ToolTipWrapper>
          )}
          {!isMyCrew && isParticipant && (
            <ToolTipWrapper>
              <Text>내가 속한 크루</Text>
            </ToolTipWrapper>
          )}
          {vacancy && !isMyCrew && !isParticipant && (
            <ToolTipWrapper>
              <Text>모집중</Text>
            </ToolTipWrapper>
          )}
        </CrewProfileInfo>
        <Text size={20} weight={700}>
          크루 소개
        </Text>
        <ContentText size={16} weight={300}>
          {crew.content}
        </ContentText>
        <Text size={20} weight={700}>
          크루원
        </Text>
        <MembersContainer>
          <MemberWrapper gap={10}>
            {crew.members.map(({ id, profileImageUrl, nickname }) => (
              <AvatarWrapper
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
                <MemberName size={12}>{nickname}</MemberName>
                <Crown isLeader={crew.leader.id === id} />
              </AvatarWrapper>
            ))}
          </MemberWrapper>
        </MembersContainer>
        <Text size={20} weight={700}>
          크루 정보
        </Text>
        <Flex gap={10}>
          <InfoItem
            title={'주 활동 지역'}
            text={`${crew.addressDepth1} ${crew.addressDepth2}`}
          >
            <Map width={40} height={40} />
          </InfoItem>
          <InfoItem title={'현재원'} text={`${crew.memberCount}명`}>
            <Ball width={40} height={40} />
          </InfoItem>
          <InfoItem title={'정원'} text={`${crew.maxMemberCount}명`}>
            <CrewMember width={40} height={40} />
          </InfoItem>
        </Flex>
        <ButtonWrapper>
          {isMyCrew && (
            <Button
              {...theme.BUTTON_PROPS.LARGE_RED_BUTTON_PROPS}
              height="50px"
              width="100%"
              onClick={navigateToManagePage}
            >
              크루 관리
            </Button>
          )}
          {loginInfo && !isMyCrew && (
            <ErrorBoundary fallback={<></>}>
              <ParticipateButton
                loginId={loginInfo.id!}
                crewId={crew.id}
                vacancy={vacancy}
              />
            </ErrorBoundary>
          )}
          {loginInfo === null && vacancy && (
            <Button
              {...theme.BUTTON_PROPS.LARGE_RED_BUTTON_PROPS}
              height="50px"
              width="100%"
              onClick={navigateToLoginPage}
            >
              로그인 후 가입 신청하기
            </Button>
          )}
          {loginInfo === null && !vacancy && (
            <Button
              {...theme.BUTTON_PROPS.LARGE_GRAY_OUTLINED_BUTTON_PROPS}
              height="50px"
              width="100%"
            >
              신청 마감
            </Button>
          )}
        </ButtonWrapper>
      </PageContent>
    </PageWrapper>
  );
};
