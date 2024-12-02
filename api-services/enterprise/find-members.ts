import { api } from '@/lib/axios'
import { getToken } from '../get-token'

interface FindMembersParams {
  id: string
}

interface User {
  id: string
  name: string
  email: string
}

interface Member {
  user: User
  role: string
}

export interface Team {
  members: Member[]
}

export async function findMembers({ id }: FindMembersParams) {
  const token = getToken()

  const response = await api.get<Team>(`/enterprise/members/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}
