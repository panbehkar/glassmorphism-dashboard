import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="p-6 text-center sm:w-[250px]">
      <h1>404</h1>
      <h5>Not Found</h5>
      <Link to="/home">Go Home</Link>
    </div>
  );
};
