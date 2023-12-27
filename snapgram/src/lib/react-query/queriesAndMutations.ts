import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query';
import {createUserAccount, sigInAccount, sigOutAccount} from '../appwrite/api';
import {INewUser} from '@/types';

export function useCreateUserAccount() {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
}

export function useSignInAccount() {
  return useMutation({
    mutationFn: (user: {email: string; password: string}) => sigInAccount(user),
  });
}

export function useSignOutAccount() {
  return useMutation({
    mutationFn: sigOutAccount,
  });
}
