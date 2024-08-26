import { SingUpForm } from '@/components/sign-up/formt'

export default function SignUp() {
  return (
    <main>
      <main className="size-s flex items-center justify-center bg-zinc-800 mt-16">
        <section className="w-[34.438rem] h-[31.5rem] border-2 border-zinc-500 border-solid rounded-lg shadow-xl flex flex-col items-center justify-center gap-y-4">
          <h3 className="text-orange-600 text-4xl font-semibold">
            Crie sua conta
          </h3>
          <SingUpForm />
        </section>
      </main>
    </main>
  )
}
