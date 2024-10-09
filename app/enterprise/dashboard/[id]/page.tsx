import { LineChart } from '@/components/dashboard/line-chart'
import { PieChartComponent } from '@/components/dashboard/pie-chat'

export default function EnterprisePage() {
  return (
    <main className="size-full flex flex-col items-center p-24 bg-zinc-800">
      <section className="size-full flex flex-col items-center">
        <div className="w-full flex items-center">
          <h1 className="text-white text-3xl font-semibold">
            Produtos Mais Vendidos
          </h1>
        </div>
        <section className="size-full flex items-center justify-center py-16">
          <div className="w-full">
            <LineChart />
          </div>
          <div className="w-80">
            <PieChartComponent />
          </div>
        </section>
      </section>
    </main>
  )
}
