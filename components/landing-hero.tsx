'use client'

import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import TypewriterComponent from 'typewriter-effect'

import { Button } from './ui/button'

export const LandingHero = () => {
  const { isSignedIn } = useAuth()

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Explore more AI usecases</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: ['Chatbot', 'CV', 'NLP', 'Lora'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text=xl font-light text-zinc-400">Make fun with AI</div>
      <div>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button variant="fancy" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Explore!
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-sx md:text-sm font-normal">No credit card required.</div>
    </div>
  )
}
