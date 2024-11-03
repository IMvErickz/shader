'use client'

import { getEnterprises } from '@/api/enterprise/get-enterprises'
import { useQuery } from '@tanstack/react-query'
import { parseCookies } from 'nookies'
import { CreateEnterpriseModal } from './enterprise/create-enterprise-modal'
import Link from 'next/link'
import { Plus } from 'lucide-react'

export function ProfileSelectContent() {
  const cookies = parseCookies()
  const userId = cookies['@user_id']

  const { data } = useQuery({
    queryKey: ['enteprise-list', userId],
    queryFn: () => getEnterprises({ userId }),
  })

  if (!data) {
    return null
  }

  return (
    <div className="w-full flex flex-col gap-y-2 mb-2">
      {data.length === 0 ? (
        <div className="w-full flex items-center justify-center">
          <span className="text-white text-xl text-center font-semibold">
            Você ainda não tem empresas cadastradas
          </span>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-start px-2">
          {data.map((enteprise) => {
            return (
              <Link
                key={enteprise.id}
                className="size-full flex justify-start gap-x-2 text-white"
                href={`/enterprise/dashboard/${enteprise.id}`}
              >
                {enteprise.name}
              </Link>
            )
          })}
        </div>
      )}

      <div className="w-full h-0.5 bg-zinc-500 my-2"></div>

      <CreateEnterpriseModal>
        <button className="size-full flex items-center justify-center gap-x-2 text-white">
          <Plus className="size-4" />
          Cadastrar empresa
        </button>
      </CreateEnterpriseModal>
    </div>
  )
}
