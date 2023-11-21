import { axiosInstance } from '@api/axiosInstance';

import {
  GetAllChatMessagesRequest,
  GetAllChatMessagesResponse,
} from '@type/api/chat';

export const getAllChatMessages = async ({
  roomId,
}: GetAllChatMessagesRequest) => {
  const { data } = await axiosInstance.get<GetAllChatMessagesResponse>(
    `/messages/rooms/${roomId}`
  );

  return data;
};
