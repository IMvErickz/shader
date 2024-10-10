import { Category } from '@/@types/category/category'
import { api } from '@/lib/axios'

export async function getCategory() {
  const response = await api.get<Category[]>('/category')

  return response.data
}
