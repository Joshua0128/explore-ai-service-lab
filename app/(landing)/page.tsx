import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const LandingAPage = () => {
  return (
    <div>
      <div>LandingAPage (Unprotected)</div>
      <Link href="/sign-in">
        <Button> Login </Button>
      </Link>
      <Link href="/sign-up">
        <Button> Register </Button>
      </Link>
    </div>
  )
}

export default LandingAPage
