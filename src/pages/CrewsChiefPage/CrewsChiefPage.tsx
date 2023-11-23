import { useNavigate } from 'react-router-dom';

import { CrewItem } from '@components/CrewItem';
import { Header } from '@components/Header';
import { Text } from '@components/shared/Text';

import { useCreatedCrewsQuery } from '@hooks/queries/useCreatedCrewsQuery';
import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { theme } from '@styles/theme';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { Crew } from '@type/models';

import { PATH_NAME } from '@consts/pathName';

import Dots from '@assets/dots.svg?react';

import { CrewChiefModal } from './CrewCheifModal';
import {
  CrewItemWrapper,
  CrewsChiefContainer,
  DotsWrapper,
  Main,
} from './CrewsChiefPage.style';
import { useCrewChiefModal } from './useCrewChiefModal';

export const CrewsChiefPage = () => {
  const navigate = useNavigate();

  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();

  const moveToManage = (crewId: Crew['id']) => {
    navigate(PATH_NAME.GET_CREWS_MANAGE_PATH(String(crewId)));
  };
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  if (!loginInfo?.id) {
    throw new Error('로그인이 필요한 서비스입니다.');
  }

  const { id: myId } = loginInfo;

  const { data: crewsData } = useCreatedCrewsQuery({ memberId: myId });

  const {
    isOpen: isModalOpen,
    open: openModal,
    close: closeModal,
    selectedCrewId,
  } = useCrewChiefModal();

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
