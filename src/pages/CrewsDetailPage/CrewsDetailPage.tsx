import { useNavigate, useParams } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import { Avatar } from '@components/Avatar';
import { Header } from '@components/Header';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { useCrewParticipateCreateMutation } from '@hooks/mutations/useCrewParticipateCreateMutation';
import { useCrewDetailQuery } from '@hooks/queries/useCrewDetailQuery';

import { theme } from '@styles/theme';

import { Authenticated, Registration } from '@type/models';

import { PATH_NAME } from '@consts/pathName';

import Ball from '@assets/ball.svg?react';
import CrewMember from '@assets/gameMember.svg?react';
import Map from '@assets/map.svg?react';

import {
  BackgoundImage,
  ButtonWrapper,
  CrewProfileInfo,
  InfoItem,
  MemberName,
  MemberWrapper,
  MembersContainer,
  PageContent,
  PageWrapper,
  ProfileImage,
} from './CrewsDetailPage.styles';

const getMyInfo = (): Authenticated | Registration | null => {
  const json = localStorage.getItem('LOGIN_INFO');
  if (!json) {
    return null;
  }
  return JSON.parse(json);
};

export const CrewsDetailPage = () => {
  const { id } = useParams();
  if (id === undefined || isNaN(Number(id))) {
    throw new Error('"crew id" is invalid');
  }

  const myInfo = getMyInfo();
  const queryClient = useQueryClient();
  const { data: crew } = useCrewDetailQuery({ crewId: Number(id) });
  const { mutate: participateMutate } = useCrewParticipateCreateMutation();
  const navigate = useNavigate();
  const handleClickMemberProfile = (id: number | string) =>
    navigate(PATH_NAME.GET_PROFILE_PATH(String(id)));

  const renderManageButton =
    myInfo !== null && myInfo.id !== null && crew.leader.id === myInfo.id;
  const renderParticipateButton =
    myInfo !== null &&
    myInfo.id !== null &&
    crew.leader.id !== myInfo.id &&
    crew.members.every((member) => member.id !== myInfo.id);

  const onParticipateSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: ['crew-detail', crew.id],
    });
  };

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
          <InfoItem>
            <Text size={12} color={theme.PALETTE.GRAY_400}>
              주 활동 지역
            </Text>
            <Map width={40} height={40} />
            <Text
              size="80%"
              lineHeight="1rem"
            >{`${crew.addressDepth1} ${crew.addressDepth2}`}</Text>
          </InfoItem>
          <InfoItem>
            <Text size={12} color={theme.PALETTE.GRAY_400}>
              현재원
            </Text>
            <Ball width={40} height={40} />
            <Text size={16} lineHeight="1rem">{`${crew.memberCount}명`}</Text>
          </InfoItem>
          <InfoItem>
            <Text size={12} color={theme.PALETTE.GRAY_400}>
              정원
            </Text>
            <CrewMember width={40} height={40} />
            <Text
              size={16}
              lineHeight="1rem"
            >{`${crew.maxMemberCount}명`}</Text>
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
              매치 관리
            </Button>
          )}
          {renderParticipateButton && (
            <Button
              {...theme.BUTTON_PROPS.LARGE_RED_BUTTON_PROPS}
              height="50px"
              width="100%"
              onClick={() =>
                participateMutate(
                  { crewId: crew.id },
                  { onSuccess: onParticipateSuccess }
                )
              }
            >
              가입 신청하기
            </Button>
          )}
        </ButtonWrapper>
      </PageContent>
    </PageWrapper>
  );
};
