import React from 'react'
import { SpaceNavigator } from '@/components/spaces/SpaceNavigator'
import SignOut from './SignOut'
import Link from 'next/link'
import { ArrowLeftIcon, HomeIcon, PlusIcon } from 'lucide-react'
import { Label } from '../ui/label'
import ItemTypeListing from '../itemTypes/ItemTypeListing'
type Props = { spaceId: string }

function Sidebar({ spaceId }: Props) {
  return (
    <div className="flex h-screen w-80 flex-col justify-between bg-muted">
      <div className="space-y-4 ">
        <div className=" px-4 pt-8">
          {' '}
          <Link href={'/dashboard'} className="flex items-center space-x-2">
            <ArrowLeftIcon className="h-4 w-4" />
            <Label>Back to Dashboard</Label>
          </Link>
        </div>
        <div className="px-4">
          {' '}
          <SpaceNavigator />
        </div>
        <div className="px-4">
          {' '}
          <div className="mt-8">
            <Link
              href={`/spaces/${spaceId}`}
              className="mt-8  flex cursor-pointer items-center space-x-1 text-muted-foreground hover:text-white"
            >
              <HomeIcon className="h-4 w-4" />
              <Label>Home</Label>
            </Link>
          </div>
        </div>

        <ItemTypeListing spaceId={spaceId} />
      </div>
      <div className="p-4">
        <SignOut />
      </div>
    </div>
  )
}

export default Sidebar
