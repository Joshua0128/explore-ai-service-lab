import { checkApiLimit, increaseApiLimit } from '@/lib/api-limit'
import { auth } from '@clerk/nextjs'

import { NextResponse } from 'next/server'

import Replicate from 'replicate'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
})

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { prompt } = body

    if (!userId) {
      return new NextResponse('OPENAI KEY not configured', {
        status: 500,
      })
    }

    if (!prompt) {
      return new NextResponse('prompt is required', {
        status: 400,
      })
    }

    const isAllowed = await checkApiLimit()

    if (!isAllowed) {
      return new NextResponse('API Limit Exceeded', {
        status: 403,
      })
    }

    const response = await replicate.run(
      'riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05',
      {
        input: {
          alpha: 0.5,
          prompt_a: prompt,
        },
      },
    )

    await increaseApiLimit()

    return NextResponse.json(response)
  } catch (error) {
    console.log('[MUSIC_ERROR]', error)
    return new NextResponse('Interal Server Error', { status: 500 })
  }
}
