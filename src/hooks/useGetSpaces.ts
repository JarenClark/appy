import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { createBrowserClient } from '@/utils/supabase'
import { getItemsByType } from '@/queries/get-items-by-type'
import { getSpaces } from '@/queries/get-spaces'
function useGetSpacesQuery() {
  const client = createBrowserClient()
  const queryKey = ['spaces']

  const queryFn = async () => {
    return getSpaces(client).then((result: { data: any }) => result.data)
  }

  return useQuery({ queryKey, queryFn })
}

export default useGetSpacesQuery
