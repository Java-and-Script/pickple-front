///members/{memberId}
import { axiosInstance } from '@api/axiosInstance';

import {
  GetMemberProfileRequest,
  GetMemberProfileResponse,
} from '@type/api/member';

export const getMemberProfile = async ({
  memberId,
}: GetMemberProfileRequest) => {
  const { data } = await axiosInstance.get<GetMemberProfileResponse>(
    `/members/${memberId}`,
    {}
  );

  return data;
};
