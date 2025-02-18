'use client'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowRight, Code, Image, MessageSquare } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export const tools = [
  {
    label: 'Chat',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/chat',
  },
  {
    label: 'Image',
    icon: Image,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    href: '/image',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    href: '/code',
  },
]

const DashboardPage = () => {
  const router = useRouter()

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Explore the useful AI API</h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat With the Smartest Ai - Explode and experience
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => {
              router.push(tool.href)
            }}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
