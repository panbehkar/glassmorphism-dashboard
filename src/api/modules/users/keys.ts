const constant = 'users';

export const usersKeys = {
  list: [constant, 'list'],
  filters: (filters: string) => [constant, 'list', filters],
  detail: (id: number) => [constant, 'detail', id],
};
