import { useEffect, useState } from 'react'
import { EditProductPopover } from './EditProductPopover'
import { MeasureType } from '@/@types/measure/measure-enun'

interface ProductCardProps {
  name: string
  quantity: string
  measure: string
  id: string
}

export function ProductCard({ name, quantity, measure, id }: ProductCardProps) {
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
    <div className="h-48 w-64 flex flex-col border border-zinc-500 border-solid rounded-lg">
      <div className="ml-48 mt-2 absolute">
        <EditProductPopover productId={id} />
      </div>
      <div className="size-full flex flex-col items-center justify-center">
        <span className="text-white text-xl">{name}</span>
        <span className="text-white text-xl font-semibold">
          {formatPrice(30)}
        </span>
      </div>
      <div className="w-full h-max flex items-center justify-between px-4 py-2 border-t border-t-zinc-500 border-t-solid">
        <p className="text-white font-semibold">{`Quantidade (${measureType}):`}</p>
        <span className="text-white font-semibold">{quantity}</span>
      </div>
    </div>
  )
}
