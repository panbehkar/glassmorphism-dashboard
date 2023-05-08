import { Route } from 'react-router-dom';
import { RouteType } from './index';

export const routesGenerator = (routes: RouteType[]) =>
  routes.map(({ id, path, Element }) => (
    <Route key={id} path={path} element={<Element />} />
  ));
