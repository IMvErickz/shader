import { api } from '@/lib/axios'
import { getToken } from '../get-token'

interface UpdateProductProps {
  id: string
  quantity?: number
  name?: string
  price?: number
}

export async function updateProduct({
  id,
  quantity,
  name,
  price,
}: UpdateProductProps) {
  const token = getToken()

  await api.put(
    `/product/${id}`,
    {
      quantity,
      name,
      price,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
}
