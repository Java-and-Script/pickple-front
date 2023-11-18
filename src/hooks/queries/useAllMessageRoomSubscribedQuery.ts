import { useSuspenseQuery } from '@tanstack/react-query';

import { getAllMessageRoomSubscribed } from '@api/message/getAllMessageRoomSubscribed';

import { GetAllRoomSubscribedRequest } from '@type/api/message';

export const useAllMessageRoomSubscribedQuery = ({
  type,
}: GetAllRoomSubscribedRequest) => {
  return useSuspenseQuery({
    queryKey: ['all-message-room-subscribed', type],
    queryFn: () => getAllMessageRoomSubscribed({ type }),
    refetchOnMount: 'always',
  });
};
