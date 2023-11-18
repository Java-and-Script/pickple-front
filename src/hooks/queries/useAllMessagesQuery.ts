import { useSuspenseQuery } from '@tanstack/react-query';

import { getAllMessages } from '@api/message/getAllMessages';

import { GetAllMessagesRequest } from '@type/api/message';

export const useAllMessagesQuery = ({ roomId }: GetAllMessagesRequest) => {
  return useSuspenseQuery({
    queryKey: ['all-messages', roomId],
    queryFn: () => getAllMessages({ roomId }),
  });
};
