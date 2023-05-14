import { Outlet } from 'react-router-dom';
import { Main, Glass, Sphere } from '.';

export const PublicLayout = () => (
  <Main>
    <Glass className="flex-col max-sm:w-full">
      <Sphere variant="primary" className="right-[-80px] top-[-80px]" />
      <Outlet />
      <Sphere variant="secondary" className="bottom-[-60px] left-[-60px]" />
    </Glass>
  </Main>
);
