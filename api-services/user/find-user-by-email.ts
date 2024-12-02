import { User } from '@/@types/members/user'
import { api } from '@/lib/axios'

interface FindUserByEmailParams {
  email: string
}

interface FindUserByEmailResponse {
  user: User
}

export async function findUserByEmail({ email }: FindUserByEmailParams) {
  const response = await api.get<FindUserByEmailResponse>(
    `/user/findByEmail/${email}`,
  )

  return response.data
}
