import { EnterpriseResponse } from '@/@types/enterprise/enterprise-response'
import { api } from '@/lib/axios'

interface GetEnterpriseByIdProps {
  id: string
}

type EnterpriseByIdReponse = Omit<EnterpriseResponse, 'members'>

export async function getEnterpriseById({ id }: GetEnterpriseByIdProps) {
  const response = await api.get<EnterpriseByIdReponse>(`/enterprise/${id}`)

  return response.data
}
