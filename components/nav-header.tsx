import { useParams, usePathname } from 'next/navigation'
import { NavLink } from './nav-link'

export function NavHeader() {
  const pathname = usePathname()
  const params = useParams()
  const barPath = pathname === '/'

  const enterpriseId = String(params.id)

  const enterprisePath = pathname.includes('/enterprise')

  return (
    <nav className="w-full h-full items-center flex gap-x-8">
      {barPath && (
        <>
          <NavLink href="/">Empresas</NavLink>

          <NavLink href="/profile">Perfil</NavLink>
        </>
      )}

      {enterprisePath && (
        <>
          <NavLink href={`/enterprise/dashboard/${enterpriseId}`}>
            Dashboard
          </NavLink>

          <NavLink href={`/enterprise/products/${enterpriseId}`}>
            Produtos
          </NavLink>
        </>
      )}
    </nav>
  )
}
