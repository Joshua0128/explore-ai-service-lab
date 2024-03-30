'use client'

import Sidebar from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import React from 'react'
import { useEffect, useState } from 'react'

interface MobileSideBarProps {
  apiLimitCount: number
}

const MobileSideBar = ({ apiLimitCount = 0 }: MobileSideBarProps) => {
  // hydration error
  // https://stackoverflow.com/questions/73162551/how-to-solve-react-hydration-error-in-nextjs
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden ">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSideBar
