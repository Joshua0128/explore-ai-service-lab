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
    const { messages } = body

    if (!userId) {
      return new NextResponse('OPENAI KEY not configured', {
        status: 500,
      })
    }

    if (!messages) {
      return new NextResponse('messages are required', {
        status: 400,
      })
    }

    const isAllowed = await checkApiLimit()

    if (!isAllowed) {
      return new NextResponse('API Limit Exceeded', {
        status: 403,
      })
    }

    const response = await openai.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo',
    })

    await increaseApiLimit()

    return new NextResponse(JSON.stringify(response.choices[0].message), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.log('[CHAT_ERROR]', error)
    return new NextResponse('Interal Server Error', {
      status: 500,
    })
  }
}
