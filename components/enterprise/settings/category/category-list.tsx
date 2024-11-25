'use client'

import { useQuery } from '@tanstack/react-query'
import { CategoryListItem } from './category-list-item'
import { getCategory } from '@/api/category/get-category'
import { useParams } from 'next/navigation'

export function CategoryList() {
  const params = useParams()
  const enterpriseId = String(params.id)

  const { data } = useQuery({
    queryKey: ['product-category', enterpriseId],
    queryFn: () => getCategory({ enterpriseId }),
  })

  return (
    <div className="size-full border border-solid border-zinc-500 p-2 rounded-lg">
      {data && data.length < 1 ? (
        <span>Não há categorias cadastradas</span>
      ) : (
        data?.map((category) => {
          return (
            <CategoryListItem
              key={category.id}
              name={category.name}
              quantity={String(category._count.Product)}
            />
          )
        })
      )}
    </div>
  )
}
