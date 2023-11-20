import { axiosInstance } from '@api/axiosInstance';

import {
  GetChatRoomDetailsRequest,
  GetChatRoomDetailsResponse,
} from '@type/api/chat';

export const getChatRoomDetails = async ({
  roomId,
}: GetChatRoomDetailsRequest) => {
  const { data } = await axiosInstance.get<GetChatRoomDetailsResponse>(
    `/rooms/${roomId}`
  );

  return data;
};
