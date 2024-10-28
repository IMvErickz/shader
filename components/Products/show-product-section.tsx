'use client'

import { useParams, useSearchParams } from 'next/navigation'
import { ProductCard } from './ProductCard'
import { ProductList } from './ProductList'
import { useQuery } from '@tanstack/react-query'
import { getProductsByEnterpriseId } from '@/api/product/get-product-by-enterprise-id'

export function ShowProductSection() {
  const searchParams = useSearchParams()
  const viewParam = String(searchParams.get('view'))
  const params = useParams()
  const enterpriseId = String(params.id)

  const { data } = useQuery({
    queryKey: ['products', enterpriseId],
    queryFn: () => getProductsByEnterpriseId(enterpriseId),
  })

  return (
    <section className="size-full flex flex-col items-center justify-center my-8">
      {viewParam === 'grid' ? (
        <div className="size full grid grid-flow-row grid-cols-4 gap-12">
          {data?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                quantity={String(product.quantity)}
                measure={product.measure}
              />
            )
          })}
        </div>
      ) : (
        <div className="size-full flex flex-col items-center justify-center gap-12 px-8">
          {data?.map((product) => {
            return (
              <ProductList
                key={product.id}
                id={product.id}
                name={product.name}
                quantity={String(product.quantity)}
                measure={product.measure}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}
