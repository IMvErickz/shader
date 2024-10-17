import { api } from '@/lib/axios'
import { getToken } from '../get-token'

interface CreateProductProps {
  entepriseId: string
  name: string
  quantity: number
  measure: string
  categoryId: string
}

export async function createProduct({
  categoryId,
  entepriseId,
  measure,
  name,
  quantity,
}: CreateProductProps) {
  const token = getToken()

  await api.post(
    `/product/${entepriseId}`,
    {
      name,
      measure,
      quantity,
      categoryId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
}
