import { useQuery } from '@tanstack/react-query';

import { getPersonalChatRoomExisted } from '@api/chat/getPersonalChatRoomExisted';

import { GetPersonalChatRoomExistedRequest } from '@type/api/chat';

export const usePersonalChatRoomExistedQuery = ({
  receiverId,
}: GetPersonalChatRoomExistedRequest) => {
  return useQuery({
    queryKey: ['personal-room-existed', receiverId],
    queryFn: () => getPersonalChatRoomExisted({ receiverId }),
  });
};
