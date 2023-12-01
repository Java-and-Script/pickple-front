import { Header } from '@components/Header';
import { Modal } from '@components/Modal';
import { RankingModalContent } from '@components/RankingModalContent';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import {
  PageContent,
  PageWrapper,
  RankingHeader,
} from './CrewsRankingPage.styles';
import { RankingItem } from './components/RankingItem';
import { useCrewsRankingPage } from './hooks/useCrewsRankingPage';

export const CrewsRankingPage = () => {
  const {
    isOpen,
    setIsOpen,
    selectedCrewRank,
    crewsRanking,
    openModal,
    handleDetailButtonClick,
  } = useCrewsRankingPage();

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
            profileImageUrl={crewRank.profileImageUrl}
            rating={crewRank.totalScore}
            onClick={() => openModal(crewRank)}
          />
        ))}
      </PageContent>
      {selectedCrewRank && (
        <Modal header={40} isOpen={isOpen} close={() => setIsOpen(false)}>
          <Modal.Content>
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
          </Modal.Content>
        </Modal>
      )}
    </PageWrapper>
  );
};
