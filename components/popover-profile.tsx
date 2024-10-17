import * as Popover from '@radix-ui/react-popover'
import { Avatar } from './avatar'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { destroyCookie } from 'nookies'
import { useRouter } from 'next/navigation'

export function PopoverProfile() {
  const router = useRouter()

  function logout() {
    destroyCookie(undefined, '@token')
    destroyCookie(undefined, '@user_id')
    destroyCookie(undefined, '@username')

    router.replace('/sign-in')
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className="rounded-lg w-max h-12 px-2 cursor-pointer bg-transparent inline-flex items-center justify-center text-white outline-none gap-4 border border-solid border-zinc-400"
        aria-label="Update dimensions"
      >
        <Avatar />
        <ChevronDown />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded w-72 bg-zinc-900 border-2 border-zinc-700 border-solid shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade px-2"
          sideOffset={5}
        >
          <div className="w-full flex flex-col gap-y-2 p-2">
            <Link
              href="/"
              className="text-white flex items-center justify-start"
            >
              Home
            </Link>
            <Link
              href="/profile"
              className="text-white flex items-center justify-start"
            >
              Perfil
            </Link>
            <button className="text-white flex items-center justify-start">
              Criar empresa
            </button>
            <button className="text-white flex items-center justify-start">
              Configurações
            </button>

            <button
              onClick={logout}
              className="text-red-500 flex items-center justify-start"
            >
              Sair
            </button>
          </div>
          <Popover.Arrow className="fill-zinc-800" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
