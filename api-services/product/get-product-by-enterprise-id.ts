import { ProductResponse } from '@/@types/product/product-response'
import { api } from '@/lib/axios'
import { getToken } from '../get-token'

export async function getProductsByEnterpriseId(id: string) {
  const token = getToken()

  const response = await api.get<ProductResponse[]>(
    `/enterprise/products/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return response.data
}
