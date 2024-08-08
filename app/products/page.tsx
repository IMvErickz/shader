import { Button } from "@/components/button";
import { ProductCard } from "@/components/Products/ProductCard";

export default function ProductsPage() {

    return (
        <main className="size-full flex flex-col items-center justify-center">
            <section className="w-full flex items-center justify-start px-8 py-4">
                <h1 className="text-white text-4xl font-bold">Produtos Cadastrados</h1>
            </section>
            <section className="size-full flex flex-col items-center justify-center">
                <div className="size full grid grid-flow-row grid-cols-4 gap-12">
                    {Array.from({ length: 64 }).map((_, i) => {
                        return (
                            <ProductCard key={i} />
                        )
                    })}
                </div>
            </section>
        </main>
    )
}