import { useMutation } from '@tanstack/react-query';

import { postRefreshAccessToken } from '@api/member/postRefreshAccessToken';

export const useRefreshAccessTokenMutation = () => {
  const mutation = useMutation({
    mutationFn: postRefreshAccessToken,
    onSuccess: ({ accessToken }) => {
      console.log('useRefreshAccessTokenMutation Success!');
      localStorage.setItem('ACCESS_TOKEN', accessToken);
    },
    onError: () => console.log('useRefreshAccessTokenMutation Error!'),
  });

  return mutation;
};
