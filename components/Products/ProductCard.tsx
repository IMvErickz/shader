import { EditProductPopover } from './EditProductPopover'

export function ProductCard() {
  function formatPrice(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return (
    <div className="h-48 w-64 flex flex-col border border-zinc-500 border-solid rounded-lg">
      <div className="ml-48 mt-2 absolute">
        <EditProductPopover />
      </div>
      <div className="size-full flex flex-col items-center justify-center">
        <span className="text-white text-xl">Nome do produto</span>
        <span className="text-white text-xl font-semibold">
          {formatPrice(30)}
        </span>
      </div>
      <div className="w-full h-max flex items-center justify-between px-4 py-2 border-t border-t-zinc-500 border-t-solid">
        <p className="text-white font-semibold">Quantidade:</p>
        <span className="text-white font-semibold">200</span>
      </div>
    </div>
  )
}
