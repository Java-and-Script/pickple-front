import { axiosInstance } from '@api/axiosInstance';

import {
  GetPersonalChatRoomExistedRequest,
  GetPersonalChatRoomExistedResponse,
} from '@type/api/chat';

export const getPersonalChatRoomExisted = async ({
  receiverId,
}: GetPersonalChatRoomExistedRequest) => {
  const { data } = await axiosInstance.get<GetPersonalChatRoomExistedResponse>(
    '/rooms/personal/existed',
    { params: { receiver: receiverId } }
  );

  return data;
};
