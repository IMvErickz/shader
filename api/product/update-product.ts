import { api } from '@/lib/axios'
import { getToken } from '../get-token'

interface UpdateProductProps {
  id: string
  quantity: number
}

export async function updateProduct({ id, quantity }: UpdateProductProps) {
  const token = getToken()

  await api.put(
    `/product/${id}`,
    {
      quantity,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
}
