'use client'

import { findMembers } from '@/api/enterprise/find-members'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export function AddedMembersList() {
  const params = useParams()
  const enterpriseId = String(params.id)

  const { data } = useQuery({
    queryKey: ['enterprise-members', enterpriseId],
    queryFn: () => findMembers({ id: enterpriseId }),
  })

  return (
    <div className="size-full flex flex-col items-center justify-center rounded">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded">
          <tr className="rounded">
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.members.map((member) => {
            return (
              <tr key={member.user.id} className="border-b border-b-gray-700">
                <td className="px-6 py-4">{member.user.name}</td>
                <td className="px-6 py-4">{member.user.email}</td>
                <td className="px-6 py-4">{member.role}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
