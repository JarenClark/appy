import { useMutation } from '@tanstack/react-query'

import { createBrowserClient } from '@/utils/supabase'
import { updateItemBlocks } from '@/queries/update-item-blocks'
import { Block } from '@blocknote/core'

type UpdateItemBlocksParams = {
  itemId: string
  blocks: Block[]
}
export default function useUpdateItemBlocks(options?: any) {
  console.log('args (options) inside hooks', options)
  //const supabase = createBrowserClient()
  return useMutation<any, Error, UpdateItemBlocksParams>({
    mutationKey: ['updateItemBlocks'],
    mutationFn: updateItemBlocks,
    ...options,
  })
}

// const useSaveBlocks = (supabase, itemId) => {
//   return useMutation(
//     (blocks) => updateItemBlocks(supabase, itemId, blocks),
//     {
//       onSuccess: () => {
//         console.log('Document saved successfully');
//       },
//       onError: (error) => {
//         console.error('Error saving document:', error.message);
//       },
//     }
//   );
// };
