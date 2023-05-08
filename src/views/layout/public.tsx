import { Outlet } from 'react-router-dom';
import { Root } from './index';

export const PublicLayout = () => (
  <Root>
    <div className="rounded-4xl flex flex-col bg-cyan-100">
      <Outlet />
    </div>
  </Root>
);
