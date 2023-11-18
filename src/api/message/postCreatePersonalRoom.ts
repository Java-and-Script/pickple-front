import { axiosInstance } from '@api/axiosInstance';

import {
  PostCreatePersonalRoomRequest,
  PostCreatePersonalRoomResponse,
} from '@type/api/message';

export const postCreatePersonalRoom = async (
  payload: PostCreatePersonalRoomRequest
) => {
  const { data } = await axiosInstance.post<PostCreatePersonalRoomResponse>(
    '/rooms/personal',
    payload
  );

  return data;
};
