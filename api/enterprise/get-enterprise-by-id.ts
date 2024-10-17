import { EnterpriseResponse } from '@/@types/enterprise/enterprise-response'
import { api } from '@/lib/axios'
import { getToken } from '../get-token'

interface GetEnterpriseByIdProps {
  id: string
}

type EnterpriseByIdReponse = Omit<EnterpriseResponse, 'members'>

export async function getEnterpriseById({ id }: GetEnterpriseByIdProps) {
  const token = getToken()

  const response = await api.get<EnterpriseByIdReponse>(`/enterprise/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}
