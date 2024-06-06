'use client'
import useGetSpacesQuery from '@/hooks/useGetSpaces'
import Link from 'next/link'
import React from 'react'

type Props = {}

function SpaceList({}: Props) {
  const { data: spaces, isLoading, isError } = useGetSpacesQuery()

  return (
    <React.Fragment>
      <h3>Space List Client Component</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <React.Fragment>
          {isError ? (
            <p>There is an error...</p>
          ) : (
            <ul>
              {spaces.map((space: any, i: number) => (
                <li key={i}>
                  <Link href={`/spaces/${space.id}/`}>- {space.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default SpaceList
