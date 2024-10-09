'use client'

import { getEnterprises } from '@/api/enterprise/get-enterprises'
import { useQuery } from '@tanstack/react-query'
import { parseCookies } from 'nookies'
import { EnterpriseCard } from '../enterprise/enterprise-card'

export function EntepriseListSection() {
  const cookies = parseCookies()
  const userId = cookies['@user_id']

  const { data, isFetching } = useQuery({
    queryKey: ['enteprise-list', userId],
    queryFn: () => getEnterprises({ userId }),
  })

  if (!data) {
    return null
  }

  return (
    <div className="size full grid grid-flow-row grid-cols-4 gap-12">
      {isFetching &&
        Array.from({ length: 12 })?.map(() => {
          return (
            <EnterpriseCard
              isLoading={isFetching}
              id={'enterprise.id'}
              key={'enterprise.id'}
              name={'enterprise.name'}
              ownerName={'enterprise.members[0].user.name'}
            />
          )
        })}
      {data.length > 0 ? (
        data?.map((enterprise) => {
          return (
            <EnterpriseCard
              isLoading={isFetching}
              key={enterprise.id}
              id={enterprise.id}
              name={enterprise.name}
              ownerName={enterprise.members[0].user.name}
            />
          )
        })
      ) : (
        <div className="size-full flex items-center justify-center col-span-4 row-span-full">
          <span className="text-white text-5xl">
            Nenhuma empresa cadastrada
          </span>
        </div>
      )}
    </div>
  )
}
