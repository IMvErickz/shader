import { ShowProductSection } from '@/components/Products/show-product-section'
import { ToogleView } from '@/components/toogle-view'

export default function EnterpriseProducts() {
  return (
    <main className="size-full flex flex-col items-center justify-center">
      <section className="w-full flex items-center justify-between px-8 py-4">
        <h1 className="text-white text-4xl font-bold">Produtos Cadastrados</h1>
        <ToogleView />
      </section>
      <section className="size-full flex flex-col items-center justify-center my-8">
        <ShowProductSection />
      </section>
    </main>
  )
}
