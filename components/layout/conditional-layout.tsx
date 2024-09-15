'use client'

import { usePathname, useRouter } from 'next/navigation'
import { SignInHeader } from '../sign-in/header'
import { Header } from '../header'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'

export const ConditionalLayout = () => {
  const pathname = usePathname()
  const router = useRouter()

  const cookies = parseCookies()
  const isAuthPage = pathname === '/sign-in' || pathname === '/sign-up'

  useEffect(() => {
    if (!cookies['@token'] && !isAuthPage) {
      router.replace('/sign-in')
    }
  }, [cookies, isAuthPage, router])

  return <>{isAuthPage ? <SignInHeader /> : <Header />}</>
}
