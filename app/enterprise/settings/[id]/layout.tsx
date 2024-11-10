import { SettingsAside } from '@/components/enterprise/settings/aside'
import { ReactNode } from 'react'

interface SettingsLayoutProps {
  children: ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <main className="w-full flex items-center justify-between px-4">
      <SettingsAside />
      <section className="w-full flex items-center justify-center">
        {children}
      </section>
    </main>
  )
}
