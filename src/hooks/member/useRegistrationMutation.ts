import { useMutation } from '@tanstack/react-query';

import { postRegistration } from '@api/member/postRegistration';

import { useTokenStore } from '@stores/accessToken.store';
import { useLoginInfoStore } from '@stores/loginInfo.store';

export const useRegistrationMutation = () => {
  const mutation = useMutation({
    mutationFn: postRegistration,
    onSuccess: (data) => {
      useLoginInfoStore.getState().setLoginInfo(data);
      useTokenStore.getState().setAccessToken(data.accessToken);
    },
    onError: () => {
      console.log('useRegistrationMutation Error!');
    },
  });

  return mutation;
};
