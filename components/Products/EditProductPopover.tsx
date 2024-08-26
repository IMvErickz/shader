import React from 'react'
import * as Popover from '@radix-ui/react-popover'
import * as Separator from '@radix-ui/react-separator'
import { Ellipsis, Pencil, Copy, Trash2 } from 'lucide-react'

export function EditProductPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="rounded-lg w-[35px] h-[35px] cursor-pointer border-2 border-slate-600 border-solid inline-flex items-center justify-center text-violet11 bg-zinc-800 outline-none"
          aria-label="Update dimensions"
        >
          <Ellipsis className="text-white" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded w-32 bg-zinc-800 border-2 border-zinc-700 border-solid shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <div className="w-full flex flex-col gap-y-2 mb-2">
            <p className="text-white text-lg font-medium mb-2.5">Opções</p>
            <Separator.Root className="bg-slate-500 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px" />
            <button className="size-full flex justify-center gap-x-2 text-white">
              <Pencil className="w-4" />
              Editar
            </button>
            <Separator.Root className="bg-slate-500 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px" />
            <button className="size-full flex justify-center gap-x-2 text-white">
              <Copy className="w-4" />
              Duplicar
            </button>
            <Separator.Root className="bg-slate-500 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px" />
            <button className="size-full flex justify-center gap-x-2 text-red-500">
              <Trash2 className="w-4" />
              Excluir
            </button>
          </div>
          <Popover.Arrow className="fill-zinc-800" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
