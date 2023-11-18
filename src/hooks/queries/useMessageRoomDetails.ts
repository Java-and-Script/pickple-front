import { useSuspenseQuery } from '@tanstack/react-query';

import { getRoomDetails } from '@api/message/getRoomDetails';

import { GetRoomDetailsRequest } from '@type/api/message';

export const useMessageRoomDetails = ({ roomId }: GetRoomDetailsRequest) => {
  return useSuspenseQuery({
    queryKey: ['message-room-details', roomId],
    queryFn: () => getRoomDetails({ roomId }),
  });
};
