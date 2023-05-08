import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { initialLoginData, LoginPayload, useLogin } from '@/api';
import { useAuthStore } from '@/store';
import { toast } from '@/toast';
import { Input, Button } from '@/views/components';

const loginSchema = z.object({
  username: z.string().min(3, { message: 'At least 3 characters' }),
  password: z.string().min(3, { message: 'At least 3 characters' }),
});

export const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();
  const { mutate: postLogin } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginPayload>({
    resolver: zodResolver(loginSchema),
    defaultValues: initialLoginData,
  });

  const onSubmitHandler: SubmitHandler<LoginPayload> = login => {
    postLogin(login, {
      onSuccess: ({ firstName, lastName, image, token }) => {
        setAuth({
          name: `${firstName} ${lastName}`,
          image,
          token,
        });
        toast.success('You have successfully logged in!');
        navigate('/home');
      },
    });
  };

  return (
    <form
      className="flex flex-col gap-4 p-6 sm:w-[360px]"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="mb-2 flex flex-col gap-2">
        <span className="text-lg">Welcome to</span>
        <h2>Glassmorphism Panel</h2>
        <span>Please enter your username and password</span>
      </div>
      <Input
        placeholder="Username"
        type="text"
        register={register('username')}
        errorMsg={errors.username?.message}
        icon="icon-user"
        autoComplete="off"
        autoFocus
      />
      <Input
        placeholder="Password"
        type="text"
        register={register('password')}
        errorMsg={errors.password?.message}
        icon="icon-lock"
        autoComplete="off"
      />
      <Button className="" disabled={!isValid}>
        Submit
      </Button>
    </form>
  );
};
