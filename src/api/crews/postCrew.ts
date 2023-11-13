import { axiosInstance } from '@api/axiosInstance';

import { PostCrewRequest, PostCrewResponse } from '@type/api/crews';

export const postCrew = async (payload: PostCrewRequest) => {
  const { data } = await axiosInstance.post<PostCrewResponse>(
    '/crews',
    payload
  );

  return data;
};
