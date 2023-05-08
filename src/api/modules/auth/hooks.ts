import { usePost } from '@/api';
import { LoginPayload, LoginResponse } from './index';

export const useLogin = () =>
  usePost<LoginPayload, LoginResponse>('/auth/login');
