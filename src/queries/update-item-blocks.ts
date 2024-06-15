import { createBrowserClient } from '@/utils/supabase'
import { Block } from '@blocknote/core'
import { SupabaseClient } from '@supabase/supabase-js'

export async function updateItemBlocks(
  client: any,
  itemId: string,
  blocks: any,
) {
  console.log('args inside queries', itemId, blocks)
  console.log('itemId is', itemId)
  //  const supabase = createBrowserClient()

  const { data, error } = await client
    .from('items')
    .update({ content: blocks })
    .eq('id', itemId)
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data
}
