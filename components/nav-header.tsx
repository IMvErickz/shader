import { NavLink } from './nav-link'

export function NavHeader() {
  return (
    <nav className="w-full h-full items-center flex gap-x-8">
      <NavLink href="/">Dashboard</NavLink>

      <NavLink href="/products">Products</NavLink>
    </nav>
  )
}
