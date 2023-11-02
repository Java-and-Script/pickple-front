import { axiosInstance } from '@api/axiosInstance';

import { GetLoginRequest, GetLoginResponse } from '@type/api/member';

export const getLogin = async ({
  oauthProvider,
  authCode,
}: GetLoginRequest) => {
  const { data } = await axiosInstance.get<GetLoginResponse>(
    `/auth/login/${oauthProvider}`,
    {
      params: { authCode },
    }
  );

  return data;
};
