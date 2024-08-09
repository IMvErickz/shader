export function ProductCard() {
    function formatPrice(value: number) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }

    return (
        <div className="h-72 w-64 flex flex-col border border-zinc-500 border-solid rounded-lg">
            <div className=" rounded-t-md w-[254.4px] h-32 flex justify-center">
                <img className="w-[100%] rounded-t-md object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbGKrcB6pF1xOCTCEjoBSxVp9pUIDM8UBuQ&s" alt="" />
            </div>
            <div className="size-full flex flex-col items-center justify-center">
                <span className="text-white text-xl">Nome do produto</span>
                <span className="text-white text-xl font-semibold">{formatPrice(30)}</span>
            </div>
            <div className="w-full h-max flex items-center justify-between px-4 py-2 border-t border-t-zinc-500 border-t-solid">
                <p className="text-white font-semibold">Quantidade:</p>
                <span className="text-white font-semibold">200</span>
            </div>
        </div>
    )
}