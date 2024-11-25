'use client'

import { NavLink } from '@/components/nav-link'
import { useParams } from 'next/navigation'

export function SettingsAside() {
  const params = useParams()
  const enterpriseId = String(params.id)

  return (
    <aside className="h-screen flex flex-col items-center justify-start gap-y-4 border-r border-r-solid border-r-zinc-400 px-4 mt-4">
      <NavLink
        href={`/enterprise/settings/${enterpriseId}`}
        className="text-white text-xl font-semibold"
      >
        Empresa
      </NavLink>
      <NavLink
        href={`/enterprise/settings/${enterpriseId}/members`}
        className="text-white text-xl font-semibold"
      >
        Membros
      </NavLink>
      <NavLink
        href={`/enterprise/settings/${enterpriseId}/category`}
        className="text-white text-xl font-semibold"
      >
        Categorias
      </NavLink>
    </aside>
  )
}
