import { Logo } from '@/public/icons/Logo'

export function SignInHeader() {
  return (
    <header className="w-full h-20 border-b-2 flex items-center border-b-zinc-500 border-b-solid px-4 gap-x-4">
      <Logo />
      <h1 className="uppercase text-orange-600 text-4xl font-bold">Shader</h1>
    </header>
  )
}
