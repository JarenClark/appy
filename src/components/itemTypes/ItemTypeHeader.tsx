import React from 'react'

type Props = {
  id: string
  name: string
}

export default function ItemTypeHeader({ id, name }: Props) {
  return (
    <div className="sticky top-0 z-10 block w-full border-b-2 bg-black py-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex  justify-between">
          <p className="text-xl font-bold">{name}</p>
          <div className="inline-flex items-center text-lg">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
