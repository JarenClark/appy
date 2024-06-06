import { getItemsRecent } from '@/queries/get-items-recent'
import { createServerClient } from '@/utils/supabase'
import { link } from 'fs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'

type Props = {
  spaceId: string
}

export default async function RecentItems({ spaceId }: Props) {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data: items } = await getItemsRecent(supabase, spaceId)
  return (
    <div>
      <ul className="-mx-4 flex flex-wrap">
        {items.map((item: any, i: number) => (
          <li className="mb-8 w-1/2 px-4 md:w-1/3 lg:w-1/4" key={i}>
            <Link href={`/spaces/${spaceId}/items/${item.id}`}>
              <div className="rounded-lg bg-muted p-4 pb-20">{item.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
