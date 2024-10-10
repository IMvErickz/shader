import { api } from '@/lib/axios'

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
  await api.post(`/product/${entepriseId}`, {
    name,
    measure,
    quantity,
    categoryId,
  })
}
