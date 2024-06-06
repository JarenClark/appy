import RecentItems from '@/components/items/RecentItems'
import SpaceHeader from '@/components/spaces/SpaceHeader'
import { getSpaceById } from '@/queries/get-space-by-id'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import React from 'react'

type Props = {
  params: {
    spaceId: string
  }
}
export default async function SpacePage({ params }: Props) {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data: space } = await getSpaceById(supabase, params.spaceId)

  return (
    <div className="relative">
      <SpaceHeader id={params.spaceId} name={space?.name} />
      <div className="container max-w-6xl py-8">
        <RecentItems spaceId={params.spaceId} />
        <br />
        <pre>{JSON.stringify(space, null, 2)}</pre>
      </div>
    </div>
  )
}
