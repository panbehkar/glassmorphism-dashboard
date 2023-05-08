import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PublicLayout, PrivateLayout } from '@/views/layout';
import { Loading, routesGenerator, publicRoutes, privateRoutes } from './index';

export const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            {routesGenerator(publicRoutes)}
          </Route>
          <Route path="/" element={<PrivateLayout />}>
            <Route index element={<Navigate to="/home" />} />
            {routesGenerator(privateRoutes)}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
