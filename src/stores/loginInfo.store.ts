import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Authenticated, Registration } from '@type/models';

type LoginInfo = Authenticated | Registration;
type LoginInfoState = {
  loginInfo: LoginInfo | null;
  setLoginInfo: (loginInfo: LoginInfo | null) => void;
};

export const useLoginInfoStore = create(
  persist<LoginInfoState>(
    (set) => ({
      loginInfo: null,
      setLoginInfo: (loginInfo) => set({ loginInfo }),
    }),
    {
      name: 'LOGIN_INFO_PERSIST',
    }
  )
);
