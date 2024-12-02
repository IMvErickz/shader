import { api } from '@/lib/axios'
import { getToken } from '../get-token'

interface CreateEnterpriseProps {
  name: string
}

export async function createEnterprise({ name }: CreateEnterpriseProps) {
  const token = getToken()

  await api.post(
    '/enterprise',
    {
      name,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
}
