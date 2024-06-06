import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { createBrowserClient } from '@/utils/supabase'
import { getItemsByType } from '@/queries/get-items-by-type'
function useGetItemsByTypeQuery(itemType: string) {
  const client = createBrowserClient()
  const queryKey = ['item_type', itemType]

  const queryFn = async () => {
    return getItemsByType(client, itemType).then(
      (result: { data: any }) => result.data,
    )
  }

  return useQuery({ queryKey, queryFn })
}

export default useGetItemsByTypeQuery
