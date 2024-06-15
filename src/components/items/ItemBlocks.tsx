'use client'
import useUpdateItemBlocks from '@/hooks/useUpdateItemBlocks'
import { Block } from '@blocknote/core'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

type Props = { itemId: string; initialBlocks: Block[] }

function ItemBlocks({ itemId, initialBlocks }: Props) {
  const [saved, setSaved] = useState<Boolean>(true)
  const mutation = useUpdateItemBlocks()
  return (
    <>
      <div className="flex justify-end">
        <Button
          className={`${saved ? 'pointer-events-none opacity-50' : 'opacity-100'}`}
          //   variant={saved ? 'ghost' : 'default'}
          onClick={() => mutation.mutate({ itemId })}
        >
          Save
        </Button>
      </div>
      <div className="mb-32 border-b"></div>
    </>
  )
}

export default ItemBlocks
