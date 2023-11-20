import { axiosInstance } from '@api/axiosInstance';

import {
  PostCreatePersonalChatRoomRequest,
  PostCreatePersonalChatRoomResponse,
} from '@type/api/chat';

export const postCreatePersonalChatRoom = async (
  payload: PostCreatePersonalChatRoomRequest
) => {
  const { data } = await axiosInstance.post<PostCreatePersonalChatRoomResponse>(
    '/rooms/personal',
    payload
  );

  return data;
};
