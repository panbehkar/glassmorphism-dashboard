import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AuthStore } from '.';

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      auth: null,
      setAuth: auth => set(() => ({ auth, isAuth: Boolean(auth) })),
      isAuth: false,
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
