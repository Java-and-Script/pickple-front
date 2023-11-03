import { axiosInstance } from '@api/axiosInstance';

import { PostRefreshAccessTokenResponse } from '@type/api/member';

export const postRefreshAccessToken = async () => {
  const { data } =
    await axiosInstance.post<PostRefreshAccessTokenResponse>('/auth/refresh');

  return data;
};
