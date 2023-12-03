import { useNavigate } from 'react-router-dom';

import { axiosInstance } from '@api/axiosInstance';

import { useTokenStore } from '@stores/accessToken.store';
import { useLoginInfoStore } from '@stores/loginInfo.store';

export const useAllServicesPage = () => {
  const { loginInfo, setLoginInfo } = useLoginInfoStore();

  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const myId = loginInfo?.id ? String(loginInfo?.id) : null;

  const navigate = useNavigate();

  const moveToPage = (pathName: string) => {
    navigate(pathName);
  };

  const logout = () => {
    if (myId) {
      axiosInstance.delete('/auth/logout').finally(() => {
        setLoginInfo(null);
        setAccessToken(null);
        location.href = '/';
      });
    }
  };

  return {
    moveToPage,
    logout,
    myId,
  };
};
