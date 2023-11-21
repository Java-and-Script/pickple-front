import { Avatar } from '@components/Avatar';
import { InfoItem } from '@components/InfoItem';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import Ball from '@assets/ball.svg?react';
import CrewMember from '@assets/gameMember.svg?react';
import Map from '@assets/map.svg?react';
import Tooltip from '@assets/tooltip.svg?react';

import { ContentWrapper, InfoContainer } from './RankingModalContent.styles';

type RankingModalContentProps = {
  profileImageUrl: string;
  name: string;
  ranking: number;
  infoText: string;
  activityScore: number;
  mannerScore: number;
  totalScore: number;
  addressDepth1: string;
  addressDepth2: string;
  memberCount: number;
  maxMemberCount: number;
  onDetailButtonClick: VoidFunction;
};

export const RankingModalContent = ({
  profileImageUrl,
  name,
  ranking,
  infoText,
  activityScore,
  mannerScore,
  totalScore,
  addressDepth1,
  addressDepth2,
  memberCount,
  maxMemberCount,
  onDetailButtonClick,
}: RankingModalContentProps) => {
  return (
    <ContentWrapper>
      <Flex direction="column" gap={20}>
        <Flex gap={10}>
          <Avatar src={profileImageUrl} size={60} radius="5px" />
          <Flex direction="column" justify="space-around">
            <Text size={24} weight={700}>
              {name}
            </Text>
            <Text size={12} weight={500}>
              랭킹 {ranking}위
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap={10}>
          <Flex align="center" gap={2}>
            <Tooltip />
            <Text size={10} weight={500} color={theme.PALETTE.GRAY_400} nowrap>
              {infoText}
            </Text>
          </Flex>
          <Flex gap={20}>
            <InfoContainer direction="column" gap={20}>
              <Flex direction="column" gap={5}>
                <Text size={16} weight={700}>
                  활동점수
                </Text>
                <Text size={12} weight={700}>
                  {activityScore.toLocaleString()}점
                </Text>
              </Flex>
              <InfoItem
                title={'주 활동 지역'}
                text={`${addressDepth1} ${addressDepth2}`}
              >
                <Map width={40} height={40} />
              </InfoItem>
            </InfoContainer>
            <InfoContainer direction="column" gap={20}>
              <Flex direction="column" gap={5}>
                <Text size={16} weight={700}>
                  매너지수
                </Text>
                <Text size={12} weight={700}>
                  {mannerScore.toLocaleString()}점
                </Text>
              </Flex>
              <InfoItem title={'현재원'} text={`${memberCount}명`}>
                <Ball width={40} height={40} />
              </InfoItem>
            </InfoContainer>
            <InfoContainer direction="column" gap={20}>
              <Flex direction="column" gap={5}>
                <Text size={16} weight={700}>
                  총점
                </Text>
                <Text size={12} weight={700}>
                  {totalScore.toLocaleString()}점
                </Text>
              </Flex>
              <InfoItem title={'정원'} text={`${maxMemberCount}명`}>
                <CrewMember width={40} height={40} />
              </InfoItem>
            </InfoContainer>
          </Flex>
        </Flex>
        <Button
          {...theme.BUTTON_PROPS.LARGE_RED_BUTTON_PROPS}
          width="100%"
          height="50px"
          fontSize="20px"
          fontWeight={700}
          textColor={'white'}
          backgroundColor={theme.PALETTE.RED_600}
          onClick={onDetailButtonClick}
        >
          자세히 보기
        </Button>
      </Flex>
    </ContentWrapper>
  );
};
