import Link from 'next/link'
import React from 'react'

type Props = {
  spaceId: string
  itemId: string
}

function ItemNav({ spaceId, itemId }: Props) {
  return (
    <ul className="mx-auto flex justify-center space-x-4">
      <li>
        <Link href={`/spaces/${spaceId}/items/${itemId}`}>View</Link>
      </li>
      <li>
        <Link href={`/spaces/${spaceId}/items/${itemId}/edit`}>Edit</Link>
      </li>
    </ul>
  )
}

export default ItemNav
