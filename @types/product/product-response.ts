export interface ProductResponse {
  id: string
  name: string
  quantity: number
  measure: string
  created_at: string
  userId: string | null
  enterpriseId: string
  productCategoryId: string
}
