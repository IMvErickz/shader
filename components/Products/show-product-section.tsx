'use client'

import { useSearchParams } from 'next/navigation'
import { ProductCard } from './ProductCard'
import { ProductList } from './ProductList'

export function ShowProductSection() {
  const params = useSearchParams()
  const viewParam = String(params.get('view'))

  return (
    <section className="size-full flex flex-col items-center justify-center my-8">
      {viewParam === 'grid' ? (
        <div className="size full grid grid-flow-row grid-cols-4 gap-12">
          {Array.from({ length: 10 }).map((_, i) => {
            return <ProductCard key={i} />
          })}
        </div>
      ) : (
        <div className="size-full flex flex-col items-center justify-center gap-12 px-8">
          {Array.from({ length: 10 }).map((_, i) => {
            return <ProductList key={i} />
          })}
        </div>
      )}
    </section>
  )
}
