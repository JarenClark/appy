'use client'
import React, { useEffect, useState } from 'react'
import '@blocknote/core/fonts/inter.css'
import { Block } from '@blocknote/core'
import { useCreateBlockNote } from '@blocknote/react'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import useUpdateItemBlocks from '@/hooks/useUpdateItemBlocks'
import { useMutation } from '@tanstack/react-query'
import { updateItemBlocks } from '@/queries/update-item-blocks'
import { createBrowserClient } from '@/utils/supabase'
import { Button } from '../ui/button'
import { updateBlock } from '@/app/actions/items/updateBlocks'
type Props = { itemId: string; content: Block[] }

function ItemBlockEditor({ itemId, content }: Props) {
  const supabase = createBrowserClient()

  // states
  const [blocks, setBlocks] = useState<Block[]>(content ? content : [])
  const [changed, setChanged] = useState(false)
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  // Creates a new editor instance.
  const editor = useCreateBlockNote()

  //  console.log('content is ', content)
  const handleUpdate = async () => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      let blockToJSONstring = JSON.stringify(blocks)
      const datadata = {
        itemId: itemId,
        blocks: blockToJSONstring,
      }

      //       const markdown = await editor.blocksToMarkdownLossy(editor.document);
      // console.log('markdown', markdown)
      const response = await updateBlock({ data: datadata })

      if (!response.success) {
        throw new Error(response.error)
      }

      setSuccess(true)
      console.log('Updated data:', response.data)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <div className="mb-4 flex justify-end">
        <form action={handleUpdate}>
          <Button type="submit" size={'sm'} variant={'secondary'}>
            Save Changes
          </Button>
        </form>
      </div>

      <BlockNoteView
        editor={editor}
        onChange={() => {
          // Saves the document JSON to state.
          setBlocks(editor?.document ? editor.document : [])
        }}
      />
      {/* <pre>{JSON.stringify(blocks, null, 2)}</pre> */}
    </>
  )
}

export default ItemBlockEditor
