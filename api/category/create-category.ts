import { api } from '@/lib/axios'
import { getToken } from '../get-token'

interface CreateCategoryBody {
  name: string
  enterpriseId: string
}

export async function createCategory({
  name,
  enterpriseId,
}: CreateCategoryBody) {
  const token = getToken()

  await api.post(
    `/category/create/${enterpriseId}`,
    { name },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
}
