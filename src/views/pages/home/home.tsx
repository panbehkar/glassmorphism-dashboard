import { RouteTitle } from '@/router';

export const Home = ({ title }: RouteTitle) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};
