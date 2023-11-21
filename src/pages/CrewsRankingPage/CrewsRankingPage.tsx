import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '@components/Header';
import { Modal } from '@components/Modal';
import { RankingModalContent } from '@components/RankingModalContent';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

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
  const crewIdRef = useRef<number | null>(null);

  const openModal = (crewId: number) => {
    setIsOpen(true);
    crewIdRef.current = crewId;
  };

  const handleDetailButtonClick = () => {
    if (crewIdRef.current) {
      navigate(PATH_NAME.GET_CREWS_PATH(String(crewIdRef.current)));
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
        <RankingItem
          rank={1}
          name="민재 크루"
          profilImageUrl="https://picsum.photos/41"
          rating={20000}
          onClick={() => openModal(1)}
        />
        <RankingItem
          rank={2}
          name="찬 크루"
          profilImageUrl="https://picsum.photos/42"
          rating={10000}
          onClick={() => openModal(2)}
        />
        <RankingItem
          rank={3}
          name="원지 크루"
          profilImageUrl="https://picsum.photos/43"
          rating={5000}
          onClick={() => openModal(3)}
        />
        <RankingItem
          rank={49}
          name="진욱 크루"
          profilImageUrl="https://picsum.photos/44"
          rating={1000}
          onClick={() => openModal(49)}
        />
      </PageContent>

      <Modal header={20} isOpen={isOpen} close={() => setIsOpen(false)}>
        <Modal.Content>
          <RankingModalContent
            profileImageUrl="asd"
            name="민재크루"
            ranking={49}
            infoText="랭킹은 활동점수와 매너지수를 기반으로 선정됩니다"
            activityScore={10000}
            mannerScore={10000}
            totalScore={20000}
            addressDepth1="서울시"
            addressDepth2="강남구"
            memberCount={3}
            maxMemberCount={10}
            onDetailButtonClick={handleDetailButtonClick}
          />
        </Modal.Content>
      </Modal>
    </PageWrapper>
  );
};
