import { useEffect } from 'react';
import { useToaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

/** 페이지 이동 시 토스트의 pause를 풀어줍니다 */
export const ToastResume = () => {
  const { pathname } = useLocation();
  const { handlers } = useToaster();

  useEffect(() => {
    handlers.endPause();
  }, [pathname, handlers]);

  return null;
};
