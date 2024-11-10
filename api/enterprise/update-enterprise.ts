import { api } from '@/lib/axios'
import { getToken } from '../get-token'

interface UpdateEnterpriseProps {
  id: string
  name: string
}

export async function updateEnterprise({ id, name }: UpdateEnterpriseProps) {
  const token = getToken()

  await api.put(
    `/enterprise/${id}`,
    { name },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
}
