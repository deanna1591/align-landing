import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    const { email, notes } = await request.json()

    // Basic email validation
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { error } = await supabase
      .from('waitlist')
      .insert([{ email: email.toLowerCase().trim(), notes: notes || null, source: 'landing' }])

    if (error) {
      // Duplicate email
      if (error.code === '23505') {
        return NextResponse.json(
          { message: "You're already on the list. We'll be in touch." },
          { status: 200 }
        )
      }
      console.error('Waitlist error:', error)
      return NextResponse.json(
        { error: 'Something went sideways on our end. Try again?' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: "You're in. We'll email when there's room." })
  } catch (err) {
    console.error('Waitlist API error:', err)
    return NextResponse.json(
      { error: 'Something went sideways on our end. Try again?' },
      { status: 500 }
    )
  }
}
