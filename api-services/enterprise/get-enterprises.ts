import { EnterpriseResponse } from '@/@types/enterprise/enterprise-response'
import { api } from '@/lib/axios'
import { getToken } from '../get-token'

interface GetEntepriseProps {
  userId: string
}

export async function getEnterprises({ userId }: GetEntepriseProps) {
  const token = getToken()

  const response = await api.get<EnterpriseResponse[]>(
    `/enterprise/list/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return response.data
}
