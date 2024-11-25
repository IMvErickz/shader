interface CategoryListItemProps {
  name: string
  quantity: string
}

export function CategoryListItem({ name, quantity }: CategoryListItemProps) {
  return (
    <div className="w-full flex items-center justify-between px-2">
      <span className="text-white text-lg">{name}</span>
      <div>
        <span className="text-white text-lg">Quantidade: </span>
        <span className="text-white text-lg">{quantity}</span>
      </div>
    </div>
  )
}
