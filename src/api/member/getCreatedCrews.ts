import { axiosInstance } from '@api/axiosInstance';

import {
  GetCreatedCrewsRequest,
  GetCreatedCrewsResponse,
} from '@type/api/member';

export const getCreatedCrews = async ({ memberId }: GetCreatedCrewsRequest) => {
  const { data } = await axiosInstance.get<GetCreatedCrewsResponse>(
    `/members/${memberId}/created-crews`,
    {}
  );

  return data;
};
