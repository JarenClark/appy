import ItemBlockEditor from '@/components/items/ItemBlockEditor'
import ItemHeader from '@/components/items/ItemHeader'
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

export default async function ItemPage({ params }: Props) {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data: item } = await getItemById(supabase, params.itemId)
  if (!item) return null
  return (
    <>
      <div className="container mx-auto max-w-6xl py-8">Item view page</div>
    </>
  )
}
