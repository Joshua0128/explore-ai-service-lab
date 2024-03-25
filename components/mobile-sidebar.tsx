'use client'

import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SheetTrigger, Sheet, SheetContent } from '@/components/ui/sheet'
import Sidebar from '@/components/sidebar'
import { useEffect, useState } from 'react'

const MobileSideBar = () => {
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
				<Sidebar />
			</SheetContent>
		</Sheet>
	)
}

export default MobileSideBar
