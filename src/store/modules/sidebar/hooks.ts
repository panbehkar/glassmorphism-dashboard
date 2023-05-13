import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { SidebarStore } from '.';

export const useSidebarStore = create<SidebarStore>()(
  persist(
    set => ({
      isSidebarOpen: true,
      toggleSidebar: () =>
        set(state => ({ isSidebarOpen: !state.isSidebarOpen })),
    }),
    {
      name: 'sidebar',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
