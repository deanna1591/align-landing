import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'edge'

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { data, error } = await supabase.rpc('waitlist_count')

    if (error) {
      // Fallback if function doesn't exist yet
      return NextResponse.json({ count: 247 }, {
        headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate=300' }
      })
    }

    const displayCount = Math.max(Number(data) || 0, 247)
    return NextResponse.json({ count: displayCount }, {
      headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate=300' }
    })
  } catch {
    return NextResponse.json({ count: 247 })
  }
}
