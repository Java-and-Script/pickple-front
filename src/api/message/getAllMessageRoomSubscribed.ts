import { axiosInstance } from '@api/axiosInstance';

import {
  GetAllRoomSubscribedRequest,
  GetAllRoomSubscribedResponse,
} from '@type/api/message';

export const getAllMessageRoomSubscribed = async ({
  type,
}: GetAllRoomSubscribedRequest) => {
  const { data } = await axiosInstance.get<GetAllRoomSubscribedResponse>(
    `/rooms`,
    {
      params: { type },
    }
  );

  return data;
};
