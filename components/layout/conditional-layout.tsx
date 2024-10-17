'use client'

import { usePathname } from 'next/navigation'
import { SignInHeader } from '../sign-in/header'
import { Header } from '../header'

export const ConditionalLayout = () => {
  const pathname = usePathname()
  const isAuthPage = pathname === '/sign-in' || pathname === '/sign-up'

  return <>{isAuthPage ? <SignInHeader /> : <Header />}</>
}
