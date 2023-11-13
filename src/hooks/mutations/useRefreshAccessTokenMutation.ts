import { useMutation } from '@tanstack/react-query';

import { postRefreshAccessToken } from '@api/member/postRefreshAccessToken';

import { useTokenStore } from '@stores/accessToken.store';

export const useRefreshAccessTokenMutation = () => {
  const mutation = useMutation({
    mutationFn: postRefreshAccessToken,
    onSuccess: ({ accessToken }) => {
      console.log('useRefreshAccessTokenMutation Success!');
      useTokenStore.getState().setAccessToken(accessToken);
    },
    onError: () => console.log('useRefreshAccessTokenMutation Error!'),
  });

  return mutation;
};
