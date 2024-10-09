'use client'

import { getEnterprises } from '@/api/enterprise/get-enterprises'
import { useQuery } from '@tanstack/react-query'
import { parseCookies } from 'nookies'
import { EnterpriseCard } from '../enterprise/enterprise-card'

export function EntepriseListSection() {
  const cookies = parseCookies()
  const userId = cookies['@user_id']

  const { data, isLoading } = useQuery({
    queryKey: ['enteprise-list', userId],
    queryFn: () => getEnterprises({ userId }),
  })

  if (!data) {
    return null
  }

  if (isLoading) {
    return (
      <div className="size full grid grid-flow-row grid-cols-4 gap-12">
        {Array.from({ length: 10 })?.map(() => {
          return (
            <EnterpriseCard
              isLoading={isLoading}
              key={'enterprise.id'}
              name={'enterprise.name'}
              ownerName={'enterprise.members[0].user.name'}
            />
          )
        })}
      </div>
    )
  }

  return data.length > 0 ? (
    <div className="size full grid grid-flow-row grid-cols-4 gap-12">
      {data?.map((enterprise) => {
        return (
          <EnterpriseCard
            isLoading={isLoading}
            key={enterprise.id}
            name={enterprise.name}
            ownerName={enterprise.members[0].user.name}
          />
        )
      })}
    </div>
  ) : (
    <div className="size-full flex items-center justify-center">
      <span className="text-white text-5xl">Nenhuma empresa cadastrada</span>
    </div>
  )
}
