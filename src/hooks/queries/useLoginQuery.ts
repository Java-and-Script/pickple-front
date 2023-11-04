import { useQuery } from '@tanstack/react-query';

import { getLogin } from '@api/member/getLogin';

import { GetLoginRequest } from '@type/api/member';

export const useLoginQuery = ({ oauthProvider, authCode }: GetLoginRequest) => {
  return useQuery({
    queryKey: ['login', oauthProvider, authCode],
    queryFn: () => getLogin({ oauthProvider, authCode }),
    enabled: false,
  });
};
