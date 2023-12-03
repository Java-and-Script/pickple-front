import { CrewItem } from '@components/CrewItem';
import { Header } from '@components/Header';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import Dots from '@assets/dots.svg?react';

import {
  CrewItemWrapper,
  CrewsChiefContainer,
  DotsWrapper,
  Main,
} from './CrewsChiefPage.style';
import { CrewChiefModal } from './components/CrewCheifModal';
import { useCrewsChiefPage } from './hooks/useCrewsChiefPage';

export const CrewsChiefPage = () => {
  const {
    crewsData,
    openModal,
    closeModal,
    isModalOpen,
    selectedCrewId,
    moveToManage,
    showHeaderTitle,
    entryRef,
  } = useCrewsChiefPage();

  return (
    <CrewsChiefContainer>
      <Header title={showHeaderTitle ? '내가 만든 크루' : ''} />
      <Main gap={10} direction="column">
        <div ref={entryRef}>
          <Text size={20} weight={700}>
            내가 만든 크루
          </Text>
        </div>
        {crewsData.map((crew) => {
          const membersProfileImageUrls = crew.members.map(
            (member) => member.profileImageUrl
          );

          return (
            <CrewItemWrapper key={crew.id}>
              <CrewItem
                name={crew.name}
                address={`${crew.addressDepth1} ${crew.addressDepth2}`}
                imgSrc={crew.profileImageUrl}
                membersProfileImageUrls={membersProfileImageUrls}
                memberCount={crew.memberCount}
                maxMemberCount={crew.maxMemberCount}
                onClick={() => moveToManage(crew.id)}
              />
              <DotsWrapper onClick={() => openModal(crew.id)}>
                <Dots fill={theme.PALETTE.GRAY_600} />
              </DotsWrapper>
            </CrewItemWrapper>
          );
        })}
      </Main>

      <CrewChiefModal
        isOpen={isModalOpen}
        close={closeModal}
        crewId={selectedCrewId}
      />
    </CrewsChiefContainer>
  );
};
