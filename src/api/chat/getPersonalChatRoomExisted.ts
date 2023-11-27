import { axiosInstance } from '@api/axiosInstance';

import {
  GetPersonalChatRoomExistedRequest,
  GetPersonalChatRoomExistedResponse,
} from '@type/api/chat';

export const getPersonalChatRoomExisted = async ({
  receiverId,
}: GetPersonalChatRoomExistedRequest) => {
  const { data } = await axiosInstance.get<GetPersonalChatRoomExistedResponse>(
    '/rooms/personal',
    { params: { receiver: receiverId } }
  );

  return data;
};
