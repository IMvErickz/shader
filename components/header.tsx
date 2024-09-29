import { Logo } from '@/public/icons/Logo'
import { usePathname } from 'next/navigation'
import { RegisterModal } from './Products/RegisterModal'
import { NavHeader } from './nav-header'
import { ProfileSelect } from './profile-select'

export function Header() {
  const path = usePathname()

  return (
    <header className="w-full h-max border-b-2 flex flex-col items-center justify-between border-b-zinc-500 border-b-solid py-2 px-4 gap-4">
      <div className="w-full flex items-center justify-start">
        <Logo />
        <ProfileSelect label="Erick" />
      </div>
      <div className="w-full flex items-center justify-between">
        <NavHeader />
        <div className="w-56">{path === '/products' && <RegisterModal />}</div>
      </div>
    </header>
  )
}
