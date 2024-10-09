import { EntepriseListSection } from '@/components/enterprise-page/enterprise-list-section'

export default function Home() {
  return (
    <main className="size-full flex flex-col items-center p-24 bg-zinc-800">
      <section className="size-full flex flex-col items-center">
        <div className="w-full flex items-center">
          <h1 className="text-white text-3xl font-semibold">
            Empresas Cadastradas
          </h1>
        </div>
        <section className="size-full flex items-center justify-center py-16">
          <EntepriseListSection />
        </section>
      </section>
    </main>
  )
}
