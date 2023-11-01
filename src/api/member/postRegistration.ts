// /members
import { axiosInstance } from '@api/axiosInstance';

import {
  PostRegistrationRequest,
  PostRegistrationResponse,
} from '@type/api/member';

export const postRegistration = async (payload: PostRegistrationRequest) => {
  const { data } = await axiosInstance.post<PostRegistrationResponse>(
    '/members',
    {
      data: payload,
    }
  );

  return data;
};
