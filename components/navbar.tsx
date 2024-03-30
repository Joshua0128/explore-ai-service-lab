import MobileSideBar from '@/components/mobile-sidebar'
import { getApiLimitCount } from '@/lib/api-limit'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount()

  return (
    <div className="flex items-center p-4">
      <MobileSideBar apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton />
      </div>
    </div>
  )
}

export default Navbar
