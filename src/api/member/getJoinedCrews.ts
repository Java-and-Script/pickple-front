import { axiosInstance } from '@api/axiosInstance';

import { GetJoinedCrewsResponse } from '@type/api/member';
import { Member } from '@type/models';

export type getJoinedCrewsProps = {
  memberId: Member['id'];
  status: '대기' | '확정';
};

export const getJoinedCrews = async ({
  memberId,
  status,
}: getJoinedCrewsProps) => {
  const { data } = await axiosInstance.get<GetJoinedCrewsResponse>(
    `/members/${memberId}/crews`,
    {
      params: { status },
    }
  );

  return data;
};
