import { Outlet } from 'react-router-dom';
import { Main, Glass, Sphere, Sidebar, SidebarToggler, Header } from '.';

export const PrivateLayout = () => (
  <Main>
    <Glass className="h-full w-full flex-col-reverse sm:flex-row">
      <Sphere variant="primary" className="-right-10 top-8" />
      <Sidebar />
      <div
        className="relative flex h-full w-full flex-col gap-4 rounded-primary bg-white/30 p-4"
        role="content-wrapper"
      >
        <SidebarToggler />
        <Header />
        <Outlet />
      </div>
      <Sphere variant="secondary" className="-bottom-10 left-8" />
    </Glass>
  </Main>
);
