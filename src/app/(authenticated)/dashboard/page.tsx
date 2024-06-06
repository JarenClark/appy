import AuthButton from '@/components/AuthButton'
import SpaceList from '@/components/spaces/SpaceList'
import { getSpaces } from '@/queries/get-spaces'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import { formatDistance, formatDistanceToNow } from 'date-fns'
import { Label } from '@/components/ui/label'

type Props = {}

export default async function DashboardPage({}: Props) {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data: spaces } = await getSpaces(supabase)
  return (
    <>
      <div className="sticky top-0 block w-full border-b-2 py-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex  justify-between">
            <p className="text-xl font-bold">Dashboard</p>
            <div className="inline-flex items-center">
              <AuthButton />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen py-20">
        <div className="container mx-auto max-w-6xl">
          <p>Spaces fetched on Server</p>
          <ul>
            {spaces.map((space: any, i: number) => (
              <li
                key={i}
                className="group overflow-hidden border-b-2 border-white first:rounded-t-xl last:rounded-b-xl last:border-none dark:border-black"
              >
                <Link href={`/spaces/${space.id}`}>
                  <div className="flex justify-between bg-black/5 px-4 py-4 dark:bg-white/5 ">
                    <span className="translate-x-0 transition duration-300 group-hover:translate-x-2">
                      {space.name}
                    </span>
                    <div className="inline-flex items-center space-x-4">
                      <ul className="inline-flex items-center">
                        {['bg-purple-500', 'bg-blue-500', 'bg-indigo-500'].map(
                          (bgclass: string, j: number) => (
                            <li
                              key={j}
                              className={`h-4 w-4 rounded-full ${bgclass}`}
                            ></li>
                          ),
                        )}
                      </ul>
                      {/* <Label>{formatDistanceToNow(space.updated_at)}</Label> */}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <SpaceList />
        </div>
      </div>
    </>
  )
}
