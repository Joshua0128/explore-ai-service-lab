import { checkApiLimit, increaseApiLimit } from '@/lib/api-limit'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
})

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { prompt, amount = 1, resolution = '256x256' } = body

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

    if (!amount) {
      return new NextResponse('amount is required', {
        status: 400,
      })
    }

    if (!resolution) {
      return new NextResponse('resolution is required', {
        status: 400,
      })
    }

    const isAllowed = await checkApiLimit()

    if (!isAllowed) {
      return new NextResponse('API Limit Exceeded', {
        status: 403,
      })
    }

    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    })

    await increaseApiLimit()

    return NextResponse.json(response.data)
  } catch (error) {
    console.log('[CODE_ERROR]', error)
    return new NextResponse('Interal Server Error', {
      status: 500,
    })
  }
}
