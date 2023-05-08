import { useGet } from '@/api';
import { UsersList, usersKeys, usersMock } from './index';

export const useFetchUsers = () =>
  useGet<UsersList>('/users', usersKeys.list, {
    initialData: usersMock,
  });
