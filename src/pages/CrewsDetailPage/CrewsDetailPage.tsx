import { ErrorBoundary } from 'react-error-boundary';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

import { Avatar } from '@components/Avatar';
import { Header } from '@components/Header';
import { InfoItem } from '@components/InfoItem';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { useCrewParticipateCreateMutation } from '@hooks/mutations/useCrewParticipateCreateMutation';
import { useCrewDetailQuery } from '@hooks/queries/useCrewDetailQuery';

import { theme } from '@styles/theme';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PATH_NAME } from '@consts/pathName';

import Ball from '@assets/ball.svg?react';
import CrewMember from '@assets/gameMember.svg?react';
import Map from '@assets/map.svg?react';

import {
  BackgoundImage,
  ButtonWrapper,
  CrewProfileInfo,
  MemberName,
  MemberWrapper,
  MembersContainer,
  PageContent,
  PageWrapper,
  ProfileImage,
} from './CrewsDetailPage.styles';
import { ParticipateButton } from './ParticipateButton';

export const CrewsDetailPage = () => {
  const { id } = useParams();
  if (id === undefined || isNaN(Number(id))) {
    throw new Error('"crew id" is invalid');
  }

  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  const { data: crew } = useCrewDetailQuery({ crewId: Number(id) });
  const { mutate: participateMutate } = useCrewParticipateCreateMutation();
  const navigate = useNavigate();
  const handleClickMemberProfile = (id: number | string) =>
    navigate(PATH_NAME.GET_PROFILE_PATH(String(id)));

  const renderManageButton =
    loginInfo !== null &&
    loginInfo.id !== null &&
    crew.leader.id === loginInfo.id;
  const renderParticipateButton =
    loginInfo !== null &&
    loginInfo.id !== null &&
    crew.leader.id !== loginInfo.id &&
    crew.members.every((member) => member.id !== loginInfo.id);

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
        </CrewProfileInfo>
        <Text size={20} weight={700}>
          크루 소개
        </Text>
        <Text size={16} weight={300}>
          {crew.content}
        </Text>
        <Text size={20} weight={700}>
          가입한 크루원
        </Text>
        <MembersContainer>
          <MemberWrapper gap={10}>
            {crew.members.map(({ id, profileImageUrl, nickname }) => (
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
                <MemberName size={12}>{nickname}</MemberName>
              </Flex>
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
          {renderManageButton && (
            <Button
              {...theme.BUTTON_PROPS.LARGE_RED_BUTTON_PROPS}
              height="50px"
              width="100%"
              onClick={() =>
                navigate(PATH_NAME.GET_CREWS_MANAGE_PATH(String(crew.id)))
              }
            >
              크루 관리
            </Button>
          )}
          {renderParticipateButton && (
            <ErrorBoundary
              fallback={<></>}
              onError={() => toast.error('크루 가입여부를 불러올 수 없습니다')}
            >
              <ParticipateButton
                memberId={Number(loginInfo.id)}
                crewId={crew.id}
                onClick={() =>
                  participateMutate(
                    { crewId: crew.id },
                    {
                      onSuccess: () => {
                        toast('가입 신청되었습니다');
                      },
                    }
                  )
                }
              />
            </ErrorBoundary>
          )}
        </ButtonWrapper>
      </PageContent>
    </PageWrapper>
  );
};
