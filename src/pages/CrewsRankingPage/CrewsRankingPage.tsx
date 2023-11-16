import { Suspense, useRef, useState } from 'react';

import { Header } from '@components/Header';
import { Modal } from '@components/Modal';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import {
  PageContent,
  PageWrapper,
  RankingHeader,
} from './CrewsRankingPage.styles';
import { RankingItem } from './components/RankingItem';

export const CrewsRankingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const crewIdRef = useRef<number | null>(null);

  const openModal = (crewId: number) => {
    setIsOpen(true);
    crewIdRef.current = crewId;
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
          profilImageUrl="asd"
          rating={20000}
          onClick={() => openModal(1)}
        />
        <RankingItem
          rank={2}
          name="진욱 크루"
          profilImageUrl="asd"
          rating={1000}
          onClick={() => openModal(2)}
        />
        <RankingItem
          rank={3}
          name="진욱 크루"
          profilImageUrl="asd"
          rating={1000}
          onClick={() => openModal(3)}
        />
        <RankingItem
          rank={49}
          name="진욱 크루"
          profilImageUrl="asd"
          rating={1000}
          onClick={() => openModal(49)}
        />
      </PageContent>

      <Modal header isOpen={isOpen} close={() => setIsOpen(false)}>
        <Modal.Content>
          <Suspense fallback={null}>{crewIdRef.current}</Suspense>
        </Modal.Content>
      </Modal>
    </PageWrapper>
  );
};
