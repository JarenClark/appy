import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { createBrowserClient } from '@/utils/supabase'
import { getSpaceById } from '@/queries/get-space-by-id'

function useGetSpaceById(spaceId: string) {
  const client = createBrowserClient()
  const queryKey = ['space', spaceId]

  const queryFn = async () => {
    return getSpaceById(client, spaceId).then(
      (result: { data: any }) => result.data,
    )
  }

  return useQuery({ queryKey, queryFn })
}

export default useGetSpaceById
