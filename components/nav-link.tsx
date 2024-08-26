'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
}

export function NavLink({ children, href, ...props }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      data-current={pathname === href}
      {...props}
      className="flex text-white text-base data-[current=true]:text-orange-400"
    >
      <strong>{children}</strong>
    </Link>
  )
}
