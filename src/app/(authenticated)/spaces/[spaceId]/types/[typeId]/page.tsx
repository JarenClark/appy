import ItemTypeHeader from '@/components/itemTypes/ItemTypeHeader'
import { getItemTypeById } from '@/queries/get-item-type-by-id'
import { getItemsByType } from '@/queries/get-items-by-type'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'

type Props = {
  params: {
    spaceId: string
    typeId: string
  }
}

export default async function ItemTypePage({ params }: Props) {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data: itemType } = await getItemTypeById(supabase, params.typeId)
  const { data: items } = await getItemsByType(supabase, params.typeId)
  return (
    <div className="justify-123-between flex h-screen flex-col">
      <ItemTypeHeader id={params.typeId} name={itemType.name} />
      <div className="container mx-auto max-w-6xl">
        <ul className="-mx-4 mt-8 flex flex-wrap">
          {items.map((item: any, i: number) => (
            <li className="mb-8 w-1/2 px-4 md:w-1/3 lg:w-1/4" key={i}>
              <Link href={`/spaces/${params.spaceId}/items/${item.id}`}>
                <div className="rounded-lg bg-muted p-4 pb-20">
                  {item.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <pre>{JSON.stringify(itemType, null, 2)}</pre>
      </div>
    </div>
  )
}
