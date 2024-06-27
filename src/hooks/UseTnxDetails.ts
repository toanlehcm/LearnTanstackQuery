import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { Transaction, TnxApi } from '../api'
import { QueryKeys } from '@/constants'

export function useTnxDetails(tnxId: string, options?: Omit<UseQueryOptions<Transaction>, 'queryKey' | 'queryFn'>) {
  return useQuery({
    ...options,
    queryKey: [QueryKeys.TNX_DETAILS, tnxId],
    queryFn: () => TnxApi.getDetails(tnxId!),
    enabled: !!tnxId,
    refetchInterval: (query) => {
      const currentStatus = query.state?.data?.status || 'pending'

      if (['completed', 'cancelled', 'failed'].includes(currentStatus)) {
        return false
      }

      return 3000
    },
  })
}
