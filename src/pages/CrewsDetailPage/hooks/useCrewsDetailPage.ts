import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useCrewDetailQuery } from '@hooks/crews/useCrewDetailQuery';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PATH_NAME } from '@constants/pathName';

export const useCrewsDetailPage = () => {
  const { id } = useParams();
  if (id === undefined || isNaN(Number(id))) {
    throw new Error('"crew id" is invalid');
  }

  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  const { data: crew } = useCrewDetailQuery({ crewId: Number(id) });

  const navigate = useNavigate();
  const handleClickMemberProfile = (id: number | string) =>
    navigate(PATH_NAME.GET_PROFILE_PATH(String(id)));

  const vacancy = crew.maxMemberCount - crew.memberCount > 0;
  const isMyCrew = crew.leader.id === loginInfo?.id;
  const isParticipant = crew.members.some(
    (member) => member.id === loginInfo?.id
  );

  const navigateToManagePage = () =>
    navigate(PATH_NAME.GET_CREWS_MANAGE_PATH(String(crew.id)));
  const navigateToLoginPage = () => navigate(PATH_NAME.LOGIN);

  return {
    loginInfo,
    crew,
    isMyCrew,
    isParticipant,
    vacancy,
    handleClickMemberProfile,
    navigateToManagePage,
    navigateToLoginPage,
  };
};
