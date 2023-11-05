import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AllowCard } from '@components/AllowCard';
import { Header } from '@components/Header';

import { useAllowGameParticipateMutation } from '@hooks/mutations/useAllowGameParticipateMutation';
import { useRefuseGameParticipateMutation } from '@hooks/mutations/useDisallowGameParticipateMutation';
import { useGameMembersQuery } from '@hooks/queries/useGameMembersQuery';

import { PATH_NAME } from '@consts/pathName';

import { AllowCardGroup, Main, ManageContainer } from './GamesManagePage.style';

export const GamesManagePage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const gameId = Number(id);

  const { mutate: allowMutate } = useAllowGameParticipateMutation();
  const { mutate: refuseMutate } = useRefuseGameParticipateMutation();
  const {
    data: {
      members: waitingMembers,
      host: { id: hostId },
      playDate,
      addressDepth2,
    },
  } = useGameMembersQuery({
    gameId: gameId,
    status: '대기',
  });

  useEffect(() => {
    const stringifiedInfo = localStorage.getItem('LOGIN_INFO') ?? '';

    const { id: myId } = JSON.parse(stringifiedInfo);

    if (hostId !== Number(myId)) {
      navigate(PATH_NAME.LOGIN);
      return;
    }
  }, [hostId, navigate]);

  const moveToProfile = (memberId: number) => {
    navigate(PATH_NAME.GET_PROFILE_PATH(String(memberId)));
  };

  const handleGuestAction = (memberId: number, action: '확정' | '거절') => {
    if (action === '확정') {
      allowMutate({
        payload: { status: '확정' },
        memberId,
        gameId,
      });
    } else {
      refuseMutate({ memberId, gameId });
    }
  };

  return (
    <ManageContainer>
      <Header
        isLogo={false}
        title={playDate.split('-').splice(1, 2).join('.') + ' ' + addressDepth2}
        isRightContainer={true}
      />
      <Main>
        <AllowCardGroup>
          {waitingMembers.map(({ ...props }) => (
            <AllowCard
              key={props.id}
              member={props}
              onClickProfile={() => moveToProfile(props.id)}
              onClickAllowButton={() => handleGuestAction(props.id, '확정')}
              onClickDisallowButton={() => handleGuestAction(props.id, '거절')}
            />
          ))}
        </AllowCardGroup>
      </Main>
    </ManageContainer>
  );
};
