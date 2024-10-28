import { api } from '@/lib/axios'
import { getToken } from '../get-token'
import { ProductResponse } from '@/@types/product/product-response'

interface GetProductByIdProps {
  id: string
}

export async function getProductById({ id }: GetProductByIdProps) {
  const token = getToken()

  const response = await api.get<ProductResponse>(`/product/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}
