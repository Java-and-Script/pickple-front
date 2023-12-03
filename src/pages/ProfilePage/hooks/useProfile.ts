import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMemberProfileQuery } from '@hooks/member/useMemberProfileQuery';
import { useChatOnButtonClick } from '@hooks/useChatOnButtonClick';
import { usePositionToast } from '@hooks/usePositionToast';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { Member } from '@type/models';
import { PositionInfo } from '@type/models/Position';

import { PATH_NAME } from '@constants/pathName';

import { ProfileProps } from '..';

export const useProfile = ({ memberId }: ProfileProps) => {
  const myId = useLoginInfoStore((state) => state.loginInfo?.id) ?? null;
  const navigate = useNavigate();

  const { data: profile } = useMemberProfileQuery({ memberId });

  const [isHeartClicked, setIsHeartClicked] = useState(false);
  useState<PositionInfo | null>(null);

  const handleClickHeart = () => {
    setIsHeartClicked((prev: boolean) => !prev);
  };

  const moveToPage = (path: string) => {
    navigate(path);
  };

  const { handleClickChattingButton } = useChatOnButtonClick({
    targetId: memberId,
    targetNickname: profile.nickname,
    navigate,
    myId,
  });

  const handleClickCrew = (id: Member['id']) => {
    moveToPage(PATH_NAME.GET_CREWS_PATH(String(id)));
  };

  const { handleClickPosition } = usePositionToast();

  return {
    myId,
    profile,
    isHeartClicked,
    handleClickHeart,
    handleClickChattingButton,
    handleClickPosition,
    handleClickCrew,
    moveToPage,
  };
};
