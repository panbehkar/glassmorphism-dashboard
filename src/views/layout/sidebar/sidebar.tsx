import { NavLink, Link } from 'react-router-dom';
import { privateRoutes } from '@/router';
import { useSidebarStore } from '@/store';
import clsx from 'clsx';

export const Sidebar = () => {
  const { isSidebarOpen } = useSidebarStore();

  return (
    <aside
      className={clsx(
        'flex h-full w-[250px] flex-col gap-8 p-4 transition-[width]',
        { 'w-[250px]': isSidebarOpen },
        { 'w-[80px]': !isSidebarOpen }
      )}
      role="sidebar"
    >
      <span>Logo</span>
      <ul className="flex h-full flex-col gap-2">
        {privateRoutes.map(({ id, path, menu }) => (
          <li key={id}>
            <NavLink
              className={({ isActive }) =>
                clsx('flex items-center gap-4 text-2xl', {
                  'text-red-400': isActive,
                })
              }
              to={path}
            >
              {menu?.icon}
              {isSidebarOpen && <span className="text-base">{menu?.text}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
      <Link to="/login">Logout</Link>
    </aside>
  );
};
