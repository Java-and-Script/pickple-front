import { axiosInstance } from '@api/axiosInstance';

export const getAuthRedirect = async ({
  oauthProvider,
}: {
  oauthProvider: 'KAKAO';
}) => {
  const { data } = await axiosInstance.get(`/auth/${oauthProvider}`, {});

  return data;
};
