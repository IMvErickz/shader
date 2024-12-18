import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ConditionalLayout } from '@/components/layout/conditional-layout'
import { Toaster } from 'sonner'
import { GeneralProviders } from '@/providers/general-providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shader',
  description: 'Shader is your favorite stock manager',
  icons: '/favicon.ico',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} size-full flex flex-col bg-zinc-800`}
      >
        <GeneralProviders>
          <ConditionalLayout />
          <Toaster richColors />
          <main className="flex flex-col items-center justify-center">
            {children}
          </main>
        </GeneralProviders>
      </body>
    </html>
  )
}
