import { usePost } from '@/api';
import { LoginPayload, LoginResponse } from '.';

export const useLogin = () =>
  usePost<LoginPayload, LoginResponse>('/auth/login');
