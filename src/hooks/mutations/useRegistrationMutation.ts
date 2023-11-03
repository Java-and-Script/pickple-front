import { useMutation } from '@tanstack/react-query';

import { postRegistration } from '@api/member/postRegistration';

export const useRegistrationMutation = () => {
  const mutation = useMutation({
    mutationFn: postRegistration,
    onSuccess: (data) => {
      console.log('useRegistrationMutation Success!');
      // TODO : 쿠키와 사용자 정보에 대한 처리 필요
      localStorage.setItem('LOGIN_INFO', JSON.stringify(data));
    },
    onError: () => {
      console.log('useRegistrationMutation Error!');
    },
  });

  return mutation;
};
