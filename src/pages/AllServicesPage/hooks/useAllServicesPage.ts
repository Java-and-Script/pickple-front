import toast from 'react-hot-toast';
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

  const toastNextUpdate = () => {
    toast('차후에 업데이트될 기능입니다!', {
      icon: '👏',
    });
  };

  return {
    moveToPage,
    logout,
    toastNextUpdate,
    myId,
  };
};
