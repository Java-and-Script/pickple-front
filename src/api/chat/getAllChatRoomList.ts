import { axiosInstance } from '@api/axiosInstance';

import {
  GetAllChatRoomListRequest,
  GetAllChatRoomListResponse,
} from '@type/api/chat';

export const getAllChatRoomList = async ({
  type,
}: GetAllChatRoomListRequest) => {
  const { data } = await axiosInstance.get<GetAllChatRoomListResponse>(
    `/rooms`,
    {
      params: { type },
    }
  );

  return data;
};
