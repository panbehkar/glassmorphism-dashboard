import { lazily } from 'react-lazily';
import { RouteType } from '@/router';

const { Home, Users } = lazily(() => import('@/views/pages'));

export const privateRoutes: RouteType[] = [
  {
    id: 'home',
    path: 'home',
    Element: () => <Home title="Home" />,
    menu: {
      icon: <i className="icon-home"></i>,
      text: 'Home',
    },
  },
  {
    id: 'users',
    path: 'users',
    Element: () => <Users title="Users" />,
    menu: {
      icon: <i className="icon-users"></i>,
      text: 'Users',
    },
  },
];
