import { useSuspenseQuery } from '@tanstack/react-query';

import { getAllChatMessages } from '@api/chat/getAllChatMessages';

import { GetAllChatMessagesRequest } from '@type/api/chat';

export const useAllChatMessagesQuery = ({
  roomId,
}: GetAllChatMessagesRequest) => {
  return useSuspenseQuery({
    queryKey: ['all-messages', roomId],
    queryFn: () => getAllChatMessages({ roomId }),
    refetchOnMount: 'always',
  });
};
