import toast from 'react-hot-toast';

import { useQuery } from '@tanstack/react-query';

import { getConfirmedGames } from '@api/member/getConfirmedGames';
import { getJoinedCrews } from '@api/member/getJoinedCrews';

import { Crew, Game, Member } from '@type/models';
import { ChatRoom } from '@type/models/ChatRoom';

import { getGameStartDate, isGameEnded } from '@utils/domain';

type UseQuitConditionProps = {
  myId: Member['id'];
  type: ChatRoom['type'];
  domainId: Game['id'] | Crew['id'];
};

export const useQuitCondition = ({
  myId,
  type,
  domainId,
}: UseQuitConditionProps) => {
  const { refetch: fetchJoinedCrews } = useQuery({
    queryKey: ['joined-crews', myId, '확정'],
    queryFn: () => getJoinedCrews({ memberId: myId, status: '확정' }),
    enabled: false,
  });

  const { refetch: fetchConfirmedGames } = useQuery({
    queryKey: ['confirmed-games', myId],
    queryFn: () => getConfirmedGames({ memberId: myId }),
    enabled: false,
  });

  const isChatroomExitAllowed = async () => {
    if (type === '크루') {
      const { data: crews } = await fetchJoinedCrews();
      if (!crews) {
        toast.error('크루 정보를 불러오는 데 실패했습니다. 다시 시도해주세요.');
        return false;
      }

      const belongToCrew = crews.some((crew) => crew.id === domainId);

      if (belongToCrew) {
        toast.error(
          '크루에 속한 크루원은 채팅방을 나갈 수 없습니다. 크루를 탈퇴하고 다시 시도해주세요.'
        );
        return false;
      }

      return !belongToCrew;
    } else if (type === '게스트') {
      const { data: confirmedGames } = await fetchConfirmedGames();
      if (!confirmedGames) {
        toast.error('게임 정보를 불러오는 데 실패했습니다. 다시 시도해주세요.');
        return false;
      }

      const game = confirmedGames.find((crew) => crew.id === domainId);
      if (!game) {
        return true;
      }

      const startTime = getGameStartDate(game.playDate, game.playStartTime);

      const allowToQuit = isGameEnded(startTime, game.playTimeMinutes);

      if (!allowToQuit) {
        toast.error('게임이 종료된 이후에 채팅방을 나갈 수 있습니다.');
      }

      return allowToQuit;
    }

    return true;
  };
  return { isChatroomExitAllowed };
};
