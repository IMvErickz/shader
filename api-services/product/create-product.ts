import { api } from '@/lib/axios'
import { getToken } from '../get-token'
import { ProductResponse } from '@/@types/product/product-response'

interface CreateProductProps {
  enterpriseId: string
  name: string
  quantity: number
  measure: string
  categoryId: string
  price: number
  barcode: string
}

interface CreateProductResponse {
  product: ProductResponse
}

export async function createProduct({
  categoryId,
  enterpriseId,
  measure,
  name,
  quantity,
  price,
  barcode,
}: CreateProductProps) {
  const token = getToken()

  const response = await api.post<CreateProductResponse>(
    `/product/${enterpriseId}`,
    {
      name,
      measure,
      quantity,
      categoryId,
      price,
      barcode,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return response.data.product
}
