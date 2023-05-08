import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Children } from '@/types';
import { useAuthStore } from '@/store';
import { setAxiosAuth } from './index';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const Api = ({ children }: Children) => {
  const { auth } = useAuthStore();
  setAxiosAuth(auth?.token);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
