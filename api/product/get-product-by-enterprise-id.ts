import { ProductResponse } from '@/@types/product/product-response'
import { api } from '@/lib/axios'

export async function getProductsByEnterpriseId(id: string) {
  const response = await api.get<ProductResponse[]>(
    `/enterprise/products/${id}`,
  )

  return response.data
}
