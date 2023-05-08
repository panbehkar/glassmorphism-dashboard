import { lazily } from 'react-lazily';
import { RouteType } from '@/router';

const { Login, NotFound } = lazily(() => import('@/views/pages'));

export const publicRoutes: RouteType[] = [
  {
    id: 'login',
    path: 'login',
    Element: Login,
  },
  {
    id: 'notFound',
    path: '*',
    Element: NotFound,
  },
];
