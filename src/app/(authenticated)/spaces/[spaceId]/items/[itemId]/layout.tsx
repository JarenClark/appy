import ItemHeader from '@/components/items/ItemHeader'
import ItemNav from '@/components/items/ItemNav'
import { getItemById } from '@/queries/get-item-by-id'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import React from 'react'

type Props = {
  children: React.ReactNode
  params: {
    spaceId: string
    itemId: string
  }
}

export default async function ItemLayout({ children, params }: Props) {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data: item } = await getItemById(supabase, params.itemId)
  return (
    <>
      <ItemHeader id={params.itemId} title={item.title} />
      <ItemNav itemId={params.itemId} spaceId={params.spaceId} />
      {children}
    </>
  )
}
