import React from 'react'

type Props = {
  id: string
  title: string
}

export default function ItemHeader({ id, title }: Props) {
  return (
    <div className="sticky top-0 block w-full border-b-2 bg-black py-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex  justify-between">
          <p className="text-xl font-bold">{title}</p>
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
