import React from 'react'
import { getItemTypes } from '@/queries/get-item-types'
import { Label } from '../ui/label'
import { PlusIcon } from 'lucide-react'
import { cookies } from 'next/headers'
import { createServerClient } from '@/utils/supabase'
import Link from 'next/link'
type Props = { spaceId: string }

export default async function ItemTypeListing({ spaceId }: Props) {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data: itemtypes } = await getItemTypes(supabase, spaceId)

  return (
    <>
      <div className="mt-4 flex justify-between border-t-2 border-black px-5 pt-2">
        <div className=" flex items-center space-x-2 text-muted-foreground">
          {/* <BoxesIcon className="w-5 h-5" /> */}
          <Label>Content Types </Label>
        </div>
        <button className="flex items-center space-x-1 rounded-full p-1 pl-1 pr-3 text-muted-foreground hover:bg-black/50 hover:text-white">
          <PlusIcon className="h-4 w-4"></PlusIcon>
          <Label className="text-[12px]">New</Label>
        </button>
      </div>
      <ul className="block px-5">
        {itemtypes?.map((itemType: any, i: number) => (
          <li
            key={i}
            className="cursor-pointer text-muted-foreground hover:text-white"
          >
            <Link href={`/spaces/${spaceId}/types/${itemType.id}`}>
              <Label>{itemType.name}</Label>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
