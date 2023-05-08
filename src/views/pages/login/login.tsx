import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="p-6 text-center sm:w-[350px]">
      <h1>Login</h1>
      <Link to="/home">Login</Link>
    </div>
  );
};
