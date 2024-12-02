export interface ProductResponse {
  id: string
  name: string
  quantity: number
  price: number
  measure: string
  created_at: string
  userId: string | null
  enterpriseId: string
  barcode: string
  productCategoryId: string
  category: {
    name: string
  }
}
