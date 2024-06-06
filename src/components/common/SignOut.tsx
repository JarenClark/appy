import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

function SignOut({}: Props) {
  const signOut = async () => {
    'use server'
    const cookieStore = cookies()
    const supabase = createServerClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return (
    <form action={signOut}>
      <button className="rounded-lg bg-green-600 px-4 py-2 no-underline hover:bg-green-500">
        Logout
      </button>
    </form>
  )
}

export default SignOut
