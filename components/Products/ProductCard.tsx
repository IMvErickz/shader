import { useEffect, useState } from 'react'
import { EditProductPopover } from './EditProductPopover'
import { MeasureType } from '@/@types/measure/measure-enun'

interface ProductCardProps {
  name: string
  quantity: string
  measure: string
  id: string
  price: number
  category: string
}

export function ProductCard({
  name,
  quantity,
  measure,
  id,
  price,
  category,
}: ProductCardProps) {
  const [measureType, setMeasureType] = useState('')

  function formatPrice(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  useEffect(() => {
    if (measure === MeasureType.UNITY) {
      setMeasureType('U')
    }
    if (measure === MeasureType.WEIGHT) {
      setMeasureType('KG')
    }
    if (measure === MeasureType.LITER) {
      setMeasureType('L')
    }
  }, [measure])

  return (
    <div className="h-48 w-72 flex flex-col border border-zinc-500 border-solid rounded-lg">
      <div className="ml-60 mt-2 absolute">
        <EditProductPopover productId={id} />
      </div>
      <div className="size-full flex flex-col items-center justify-center gap-y-2">
        <span className="text-white text-xl">{name}</span>
        <span className="text-white text-xl font-semibold">
          {formatPrice(price)}
        </span>
        <p className="text-white font-semibold">{`Lucro total: ${formatPrice(Number(quantity) * price)}`}</p>
        <p className="text-white font-semibold">{`Categoria: ${category}`}</p>
      </div>
      <div className="w-full h-max flex items-center justify-between px-4 py-2 border-t border-t-zinc-500 border-t-solid">
        <p className="text-white font-semibold">{`Quantidade (${measureType}):`}</p>
        <span className="text-white font-semibold">{quantity}</span>
      </div>
    </div>
  )
}
