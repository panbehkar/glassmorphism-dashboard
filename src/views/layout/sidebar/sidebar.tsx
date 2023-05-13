import { useSidebarStore, useAuthStore } from '@/store';
import { toast } from '@/toast';
import { Menu } from '.';
import clsx from 'clsx';
import logoSrc from '@/assets/images/logo.svg';

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
        'relative flex flex-shrink-0 gap-4 overflow-hidden whitespace-nowrap p-4 transition-[width] sm:flex-col',
        { 'sm:w-[250px]': isSidebarOpen },
        { 'sm:w-[80px]': !isSidebarOpen }
      )}
      role="sidebar"
    >
      <div className="my-1 hidden h-[80px] sm:flex sm:shrink-0 sm:items-start sm:justify-center">
        <img className="max-h-full transition-all" src={logoSrc} alt="logo" />
      </div>
      <Menu />
      <div className="hidden h-full sm:flex sm:items-end">
        <button
          className="transition-colors hover:text-active"
          onClick={handleLogout}
          title="Logout"
        >
          <i className="icon-logout text-2xl"></i>
        </button>
      </div>
    </aside>
  );
};
