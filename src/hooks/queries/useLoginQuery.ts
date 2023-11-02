import { useSuspenseQuery } from '@tanstack/react-query';

import { getLogin } from '@api/member/getLogin';

import { GetLoginRequest } from '@type/api/member';

export const useLoginQuery = ({ oauthProvider, authCode }: GetLoginRequest) => {
  return useSuspenseQuery({
    queryKey: ['login', oauthProvider, authCode],
    queryFn: async () => getLogin({ oauthProvider, authCode }),
  });
};
