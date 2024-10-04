'use client'

import { queryClient } from '@/lib/query-client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

interface GeneralProvidersProps {
  children: ReactNode
}

export function GeneralProviders({ children }: GeneralProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
