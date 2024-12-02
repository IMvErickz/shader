import { Category } from '@/@types/category/category'
import { api } from '@/lib/axios'
import { getToken } from '../get-token'

interface GetCategoryProps {
  enterpriseId: string
}

export async function getCategory({ enterpriseId }: GetCategoryProps) {
  const token = getToken()

  const response = await api.get<Category[]>(`/category/${enterpriseId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}
