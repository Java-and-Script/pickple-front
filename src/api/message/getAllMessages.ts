import { axiosInstance } from '@api/axiosInstance';

import {
  GetAllMessagesRequest,
  getAllMessagesResponse,
} from '@type/api/message';

export const getAllMessages = async ({ roomId }: GetAllMessagesRequest) => {
  const { data } = await axiosInstance.get<getAllMessagesResponse>(
    `/messages/rooms/${roomId}`
  );

  return data;
};
