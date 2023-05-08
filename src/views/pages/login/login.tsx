import { useNavigate } from 'react-router-dom';
import { initialLoginData, LoginPayload, useLogin } from '@/api';
import { useAuthStore } from '@/store';

export const Login = () => {
  const { mutate } = useLogin();
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = (login: LoginPayload) => {
    mutate(login, {
      onSuccess: ({ firstName, lastName, image, token }) => {
        setAuth({
          name: `${firstName} ${lastName}`,
          image,
          token,
        });
        console.log('You have successfully logged in!');
        navigate('/home');
      },
    });
  };

  return (
    <div className="p-6 text-center sm:w-[350px]">
      <h1>Login</h1>
      <button onClick={() => handleSubmit(initialLoginData)}>Login</button>
    </div>
  );
};
