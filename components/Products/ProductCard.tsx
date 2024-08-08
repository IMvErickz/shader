import { Button } from "../button";

export function ProductCard() {
    function formatPrice(value: number) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }

    return (
        <div className="h-72 w-64 flex flex-col border border-zinc-500 border-solid rounded-lg">
            <div className="size-full flex items-center justify-center mt-6">
                <img className="w-28" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbGKrcB6pF1xOCTCEjoBSxVp9pUIDM8UBuQ&s" alt="" />
            </div>
            <div className="size-full flex flex-col items-center justify-center">
                <span className="text-white text-xl">Nome do produto</span>
                <span className="text-white text-xl font-semibold">{formatPrice(30)}</span>
            </div>
            <div className="size-full flex items-center justify-center px-4">
                <Button className="!w-32 !h-8">
                    Editar
                </Button>
            </div>
        </div>
    )
}