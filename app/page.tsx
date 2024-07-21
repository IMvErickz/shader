import { LineChart } from "@/components/dashboard/line-chart";

export default function Home() {

  return (
    <main className="size-full flex flex-col items-center p-24 bg-zinc-800">
      <section className="size-full flex flex-col items-center">
        <div className="w-full flex items-center">
          <h1 className="text-white text-3xl font-semibold">Produtos mais vendidos</h1>
        </div>
        <div className="size-full flex items-center justify-center">
          <LineChart />
        </div>
      </section>
    </main>
  );
}
