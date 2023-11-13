import { useMutation } from '@tanstack/react-query';

import { postRegistration } from '@api/member/postRegistration';

export const useRegistrationMutation = () => {
  const mutation = useMutation({
    mutationFn: postRegistration,
    onSuccess: (data) => {
      localStorage.setItem('LOGIN_INFO', JSON.stringify(data));
      localStorage.setItem(
        'ACCESS_TOKEN',
        JSON.stringify({ accessToken: data.accessToken })
      );
    },
    onError: () => {
      console.log('useRegistrationMutation Error!');
    },
  });

  return mutation;
};
