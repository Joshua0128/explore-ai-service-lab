import MobileSideBar from '@/components/mobile-sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSideBar />
      <div className="flex w-full justify-end">
        <UserButton />
      </div>
    </div>
  )
}

export default Navbar
