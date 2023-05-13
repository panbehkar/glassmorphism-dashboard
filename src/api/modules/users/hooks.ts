import { useGet } from '@/api';
import { UsersList, usersKeys, usersMock } from '.';

export const useFetchUsers = () =>
  useGet<UsersList>('/users', usersKeys.list, {
    initialData: usersMock,
  });
