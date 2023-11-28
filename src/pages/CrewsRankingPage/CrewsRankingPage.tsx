import { useState } from 'react';
import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import { Header } from '@components/Header';
import { Modal } from '@components/Modal';
import { RankingModalContent } from '@components/RankingModalContent';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { useCrewsRankingQuery } from '@hooks/queries/useCrewsRankingQuery';

import { CrewRank } from '@type/models/CrewRank';

import { PATH_NAME } from '@consts/pathName';

import {
  PageContent,
  PageWrapper,
  RankingHeader,
} from './CrewsRankingPage.styles';
import { RankingItem } from './components/RankingItem';

export const CrewsRankingPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCrewRank, setSelectedCrewRank] = useState<CrewRank | null>(
    null
  );

  const { data: crewsRanking } = useCrewsRankingQuery();

  const openModal = (crewRank: CrewRank) => {
    setIsOpen(true);
    setSelectedCrewRank(crewRank);
  };

  const handleDetailButtonClick = () => {
    if (selectedCrewRank) {
      flushSync(() => setIsOpen(false));
      navigate(PATH_NAME.GET_CREWS_PATH(String(selectedCrewRank.id)));
    }
  };

  return (
    <PageWrapper>
      <Header title="크루 랭킹" />
      <PageContent>
        <RankingHeader justify="space-between">
          <Flex gap={55}>
            <Text size={14} nowrap>
              순위
            </Text>
            <Text size={14} nowrap>
              크루 이름
            </Text>
          </Flex>
          <Text size={14} nowrap>
            점수
          </Text>
        </RankingHeader>
        {crewsRanking.map((crewRank) => (
          <RankingItem
            key={crewRank.id}
            rank={crewRank.rank}
            name={crewRank.name}
            profilImageUrl={crewRank.profileImageUrl}
            rating={crewRank.totalScore}
            onClick={() => openModal(crewRank)}
          />
        ))}
      </PageContent>

      <Modal header={20} isOpen={isOpen} close={() => setIsOpen(false)}>
        <Modal.Content>
          {selectedCrewRank && (
            <RankingModalContent
              profileImageUrl={selectedCrewRank.profileImageUrl}
              name={selectedCrewRank.name}
              ranking={selectedCrewRank.rank}
              infoText="랭킹은 활동점수와 매너지수를 기반으로 선정됩니다"
              activityScore={
                selectedCrewRank.totalScore - selectedCrewRank.mannerScore
              }
              mannerScore={selectedCrewRank.mannerScore}
              totalScore={selectedCrewRank.totalScore}
              addressDepth1={selectedCrewRank.addressDepth1}
              addressDepth2={selectedCrewRank.addressDepth2}
              memberCount={selectedCrewRank.memberCount}
              maxMemberCount={selectedCrewRank.maxMemberCount}
              onDetailButtonClick={handleDetailButtonClick}
            />
          )}
        </Modal.Content>
      </Modal>
    </PageWrapper>
  );
};
