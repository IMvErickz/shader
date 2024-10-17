import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('@token')

  if (!token) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/enterprise',
    '/enterprise/:path*',
    '/profile',
    '/products',
    '/products/:path*',
  ],
}
