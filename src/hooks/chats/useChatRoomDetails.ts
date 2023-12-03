import { useSuspenseQuery } from '@tanstack/react-query';

import { getChatRoomDetails } from '@api/chat/getChatRoomDetails';

import { GetChatRoomDetailsRequest } from '@type/api/chat';

export const useChatRoomDetails = ({ roomId }: GetChatRoomDetailsRequest) => {
  return useSuspenseQuery({
    queryKey: ['message-room-details', roomId],
    queryFn: () => getChatRoomDetails({ roomId }),
  });
};
