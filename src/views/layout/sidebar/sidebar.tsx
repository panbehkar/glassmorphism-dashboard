import { useSidebarStore, useAuthStore } from '@/store';
import { toast } from '@/toast';
import clsx from 'clsx';
import { Menu } from './menu';

export const Sidebar = () => {
  const { isSidebarOpen } = useSidebarStore();
  const { setAuth } = useAuthStore();

  const handleLogout = () => {
    setAuth(null);
    toast.success('You have successfully logged out!');
  };
  return (
    <aside
      className={clsx(
        'flex h-full w-[250px] flex-col items-start gap-8 p-4 transition-[width]',
        { 'w-[250px]': isSidebarOpen },
        { 'w-[80px]': !isSidebarOpen }
      )}
      role="sidebar"
    >
      <span>Logo</span>
      <Menu />
      <button onClick={handleLogout}>Logout</button>
    </aside>
  );
};
