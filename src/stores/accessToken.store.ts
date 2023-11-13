import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AccessTokenState {
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
}

export const useTokenStore = create(
  persist<AccessTokenState>(
    (set) => ({
      accessToken: null,
      setAccessToken: (accessToken) => set({ accessToken }),
    }),
    {
      name: 'ACCESS_TOKEN_PERSIST',
    }
  )
);
