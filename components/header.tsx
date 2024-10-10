'use client'

import { Logo } from '@/public/icons/Logo'
import { useParams, usePathname } from 'next/navigation'
import { RegisterModal } from './Products/RegisterModal'
import { NavHeader } from './nav-header'
import { ProfileSelect } from './profile-select'
import { parseCookies } from 'nookies'
import { useQuery } from '@tanstack/react-query'
import { getEnterpriseById } from '@/api/enterprise/get-enterprise-by-id'
import Link from 'next/link'

export function Header() {
  const path = usePathname()
  const cookies = parseCookies()
  const params = useParams()
  const userName = cookies['@username']

  const enterpriseId = String(params.id)

  const enterprisePath = path.includes('/enterprise')

  const { data } = useQuery({
    queryKey: ['enteprise', enterpriseId],
    queryFn: () => getEnterpriseById({ id: enterpriseId }),
  })

  return (
    <header className="w-full h-max border-b-2 flex flex-col items-center justify-between border-b-zinc-500 border-b-solid py-2 px-4 gap-4">
      <div className="w-full flex items-center justify-start">
        <Link href="/">
          <Logo />
        </Link>
        {userName && <ProfileSelect label={userName} />}
        {enterprisePath && (
          <div className="flex items-center justify-center gap-4">
            <span className="text-white text-base">/</span>
            <span className="text-white text-base">{data?.name}</span>
          </div>
        )}
      </div>
      <div className="w-full flex items-center justify-between">
        <NavHeader />
        <div className="w-56">{enterprisePath && <RegisterModal />}</div>
      </div>
    </header>
  )
}
