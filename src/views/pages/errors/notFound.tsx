import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-6 sm:w-[250px]">
      <h1>404</h1>
      <h5>Not Found</h5>
      <Link to="/home" className="text-blue-500">
        Go to Home
      </Link>
    </div>
  );
};
