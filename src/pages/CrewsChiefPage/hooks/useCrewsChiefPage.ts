import { useNavigate } from 'react-router-dom';

import { LoginRequireError } from '@routes/LoginRequireBoundary';

import { useCreatedCrewsQuery } from '@hooks/member/useCreatedCrewsQuery';
import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { Crew } from '@type/models';

import { PATH_NAME } from '@constants/pathName';

import { useCrewChiefModal } from './useCrewChiefModal';

export const useCrewsChiefPage = () => {
  const navigate = useNavigate();

  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();

  const moveToManage = (crewId: Crew['id']) => {
    navigate(PATH_NAME.GET_CREWS_MANAGE_PATH(String(crewId)));
  };
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  if (!loginInfo?.id) {
    throw new LoginRequireError();
  }
  const { id: myId } = loginInfo;
  const { data: crewsData } = useCreatedCrewsQuery({ memberId: myId });

  const {
    isOpen: isModalOpen,
    open: openModal,
    close: closeModal,
    selectedCrewId,
  } = useCrewChiefModal();

  return {
    crewsData,
    isModalOpen,
    openModal,
    closeModal,
    selectedCrewId,
    moveToManage,
    entryRef,
    showHeaderTitle,
  };
};
