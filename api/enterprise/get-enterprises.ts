import { EnterpriseResponse } from '@/@types/enterprise/enterprise-response'
import { api } from '@/lib/axios'

interface GetEntepriseProps {
  userId: string
}

export async function getEnterprises({ userId }: GetEntepriseProps) {
  const response = await api.get<EnterpriseResponse[]>(
    `/enterprise/list/${userId}`,
  )

  return response.data
}
