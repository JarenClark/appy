import { useMutation } from '@tanstack/react-query'

import { createBrowserClient } from '@/utils/supabase'
import { updateItemBlocks } from '@/queries/update-item-blocks'
import { Block } from '@blocknote/core'
import { useParams } from 'next/navigation'

type UpdateItemBlocksParams = {
  itemId?: string
  blocks?: Block[]
}
export default function useUpdateItemBlocks(options?: any) {
  console.log(' (options) inside hooks', options)
  const supabase = createBrowserClient()
  const { itemId } = useParams()

  // const updateFunction() {}
  return useMutation<any, Error, UpdateItemBlocksParams>({
    mutationFn: updateItemBlocks(supabase, itemId as string, 'hello world'),
    ...options,
  })
}
