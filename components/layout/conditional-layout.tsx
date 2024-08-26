'use client'

import { usePathname, useRouter } from 'next/navigation'
import { SignInHeader } from '../sign-in/header'
import { Header } from '../header'
import { parseCookies } from 'nookies'

export const ConditionalLayout = () => {
  const pathname = usePathname()
  const router = useRouter()

  const cookies = parseCookies()
  const isAuthPage = pathname === '/sign-in' || pathname === '/sign-up'

  if (!cookies['@token'] && !isAuthPage) {
    router.replace('/sign-in')
  }

  return <>{isAuthPage ? <SignInHeader /> : <Header />}</>
}
