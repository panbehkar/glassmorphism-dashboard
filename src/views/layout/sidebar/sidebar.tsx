import { privateRoutes } from '@/router';
import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';

export const Sidebar = () => {
  return (
    <aside className="flex h-full w-[250px] flex-col gap-8 p-4" role="sidebar">
      <span>Logo</span>
      <ul className="flex h-full flex-col">
        {privateRoutes.map(({ id, path, menu }) => (
          <li key={id}>
            <NavLink
              className={({ isActive }) =>
                clsx('flex items-center gap-4', {
                  'text-red-400': isActive,
                })
              }
              to={path}
            >
              {menu?.icon}
              {menu?.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <Link to="/login">Logout</Link>
    </aside>
  );
};
