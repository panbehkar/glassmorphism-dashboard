import axios, { AxiosError } from 'axios';
import {
  useQuery,
  useMutation,
  QueryKey,
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query';
import { toast } from '@/toast';

type ErrorMessage = AxiosError<{ message: string }>;

// Error handling
const onError = (error: ErrorMessage) => {
  const message = error.response?.data.message as string;
  toast.error(message);
};

// Get
export const useGet = <TResponse>(
  url: string,
  key: QueryKey,
  options?: UseQueryOptions<TResponse, ErrorMessage>
) =>
  useQuery<TResponse, ErrorMessage>(
    key,
    () => axios.get<TResponse>(url).then(({ data }) => data),
    { onError, ...options }
  );

// Post
export const usePost = <TPayload, TResponse>(
  url: string,
  options?: UseMutationOptions<TResponse, ErrorMessage, TPayload>
) =>
  useMutation<TResponse, ErrorMessage, TPayload>(
    (payload: TPayload) =>
      axios.post<TResponse>(url, payload).then(({ data }) => data),
    { onError, ...options }
  );
