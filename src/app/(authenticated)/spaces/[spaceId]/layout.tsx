import Sidebar from '@/components/common/Sidebar'
import React from 'react'

type Props = {
  params: {
    spaceId: string
  }
  children: React.ReactNode
}

function SpaceLayout({ params, children }: Props) {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar spaceId={params.spaceId} key={params.spaceId} />
      <div className="flex w-full flex-col">
        <>{children}</>
      </div>
    </div>
  )
}

export default SpaceLayout
