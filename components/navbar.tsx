import React from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import MobileSideBar from '@/components/mobile-sidebar'
import { UserButton } from '@clerk/nextjs'

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
