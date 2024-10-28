import { Category } from '@/@types/category/category'
import { api } from '@/lib/axios'
import { getToken } from '../get-token'

export async function getCategory() {
  const token = getToken()

  const response = await api.get<Category[]>('/category', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}
