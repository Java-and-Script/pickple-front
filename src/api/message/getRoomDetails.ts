import { axiosInstance } from '@api/axiosInstance';

import {
  GetRoomDetailsRequest,
  GetRoomDetailsResponse,
} from '@type/api/message';

export const getRoomDetails = async ({ roomId }: GetRoomDetailsRequest) => {
  const { data } = await axiosInstance.get<GetRoomDetailsResponse>(
    `/rooms/${roomId}`
  );

  return data;
};
