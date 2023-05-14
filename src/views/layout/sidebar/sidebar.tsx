import { useSidebarStore } from '@/store';
import { SidebarMenu } from '.';
import clsx from 'clsx';
import logoSrc from '@/assets/images/logo.svg';

export const Sidebar = () => {
  const { isSidebarOpen } = useSidebarStore();

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
      <SidebarMenu />
    </aside>
  );
};
