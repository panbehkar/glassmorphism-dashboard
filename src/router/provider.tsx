import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from '@/store';
import { PublicLayout, PrivateLayout } from '@/views/layout';
import { Loading, routesGenerator, publicRoutes, privateRoutes } from '.';

export const Router = () => {
  const { isAuth } = useAuthStore();

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            {routesGenerator(publicRoutes)}
          </Route>
          <Route
            path="/"
            element={isAuth ? <PrivateLayout /> : <Navigate to="/login" />}
          >
            <Route index element={<Navigate to="/home" />} />
            {routesGenerator(privateRoutes)}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
