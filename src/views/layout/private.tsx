import { Outlet } from 'react-router-dom';
import { Root, Sidebar, SidebarToggler, Header } from './index';

export const PrivateLayout = () => (
  <Root>
    <div className="flex h-full w-full max-w-screen-xl bg-cyan-100">
      <Sidebar />
      <div
        className="relative flex h-full w-full flex-col gap-4 bg-teal-200 p-4"
        role="content-wrapper"
      >
        <SidebarToggler />
        <Header />
        <Outlet />
      </div>
    </div>
  </Root>
);
