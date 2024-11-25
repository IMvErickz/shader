export interface Category {
  id: string
  name: string
  description: string | null
  _count: {
    Product: number
  }
}
