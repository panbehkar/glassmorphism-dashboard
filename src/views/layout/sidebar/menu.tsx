import { NavLink } from 'react-router-dom';
import { privateRoutes } from '@/router';
import { useSidebarStore } from '@/store';
import clsx from 'clsx';

export const SidebarMenu = () => {
  const { isSidebarOpen } = useSidebarStore();

  return (
    <ul className="flex w-full justify-center sm:flex-col" role="menu">
      {privateRoutes.map(
        ({ id, path, menu }) =>
          menu?.icon && (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  clsx(
                    'flex h-12 w-full items-center rounded-2xl p-3 text-2xl transition-colors hover:text-active',
                    {
                      'bg-white text-active': isActive,
                    }
                  )
                }
                to={path}
                title={menu?.text}
              >
                {menu?.icon}
                {isSidebarOpen && (
                  <span className="ml-2 hidden text-base sm:block">
                    {menu?.text}
                  </span>
                )}
              </NavLink>
            </li>
          )
      )}
    </ul>
  );
};
