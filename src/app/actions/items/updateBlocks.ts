'use server'

//import { updateItemBlocks } from '@/queries/update-item-blocks'
import { createServerClient } from '@/utils/supabase'
import { Block } from '@blocknote/core'
import { cookies } from 'next/headers'

type Props = {
  data: {
    itemId: string
    blocks: any
  }
}
export async function updateBlock({ data }: Props) {
  const { itemId, blocks } = data
  console.log('updating block \n', 'itemId:', itemId, 'blocks \n', blocks)

  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)

  try {
    const { data, error } = await supabase
      .from('items') // Replace with your table name
      .update({ blocks: blocks }) // Replace with the column and new data
      .eq('id', itemId) // Assuming 'id' is your primary key

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    return { success: false, error: JSON.stringify(error, null, 2) }
  }
}
