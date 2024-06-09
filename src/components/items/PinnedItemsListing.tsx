import React from 'react'
import { Label } from '../ui/label'
import { PinIcon } from 'lucide-react'
import { getItemsPinned } from '@/queries/get-items-pinned'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
type Props = {
  spaceId: string
}

export default async function PinnedItemsListing({ spaceId }: Props) {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data: items } = await getItemsPinned(supabase, spaceId)
  if (!items) return null
  return (
    <React.Fragment>
      {items.length == 0 ? (
        <div className="flex items-center space-x-1 text-muted-foreground">
          <PinIcon className="h-4 w-4" />
          <Label className="text-muted-foreground">No Pinned Items</Label>
        </div>
      ) : (
        <div className="flex items-center space-x-1 text-muted-foreground">
          <PinIcon className="h-4 w-4" />
          <Label>Pinned</Label>
        </div>
      )}
    </React.Fragment>
  )
}
