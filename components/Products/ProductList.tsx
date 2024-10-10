import { useEffect, useState } from 'react'
import { EditProductPopover } from './EditProductPopover'
import { MeasureType } from '@/@types/measure/measure-enun'

interface ProductListProps {
  name: string
  quantity: string
  measure: string
}

export function ProductList({ measure, name, quantity }: ProductListProps) {
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
    <div className="h-max w-full flex flex-col border border-zinc-500 border-solid rounded-lg">
      <div className="w-full flex items-center justify-end p-4">
        <EditProductPopover />
      </div>
      <div className="size-full flex flex-col items-center justify-center py-4">
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
