import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { UserProfile, userApi } from '../api'

export function useProfile(options?: Omit<UseQueryOptions<UserProfile>, 'queryKey' | 'queryFn'>) {
  return useQuery<UserProfile>({
    ...options,
    queryKey: ['profile'],
    queryFn: () => userApi.getProfile(),
  })
}
