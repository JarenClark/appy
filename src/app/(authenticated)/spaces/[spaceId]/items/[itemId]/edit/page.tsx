import ItemBlockEditor from '@/components/items/ItemBlockEditor'
import ItemBlocks from '@/components/items/ItemBlocks'
import { getItemById } from '@/queries/get-item-by-id'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import React from 'react'

type Props = {
  params: {
    spaceId: string
    itemId: string
  }
}

export default async function ItemEditPage({ params }: Props) {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data: item } = await getItemById(supabase, params.itemId)
  if (!item) return null

  const blocks = item.blocks ? JSON.parse(item.blocks) : []
  // console.log('blocks', blocks)
  return (
    <div className="container mx-auto max-w-6xl py-8">
      <ItemBlocks itemId={params.itemId} initialBlocks={blocks} />
      <ItemBlockEditor itemId={params.itemId} serverblocks={blocks} />
    </div>
  )
}
