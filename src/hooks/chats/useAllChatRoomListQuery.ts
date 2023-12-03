import { useSuspenseQuery } from '@tanstack/react-query';

import { getAllChatRoomList } from '@api/chat/getAllChatRoomList';

import { GetAllChatRoomListRequest } from '@type/api/chat';

export const useAllChatRoomListQuery = ({
  type,
}: GetAllChatRoomListRequest) => {
  return useSuspenseQuery({
    queryKey: ['all-chat-room-list', type],
    queryFn: () => getAllChatRoomList({ type }),
    refetchOnMount: 'always',
    refetchInterval: 10000,
  });
};
