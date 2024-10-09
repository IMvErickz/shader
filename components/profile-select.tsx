'use client'

import * as Popover from '@radix-ui/react-popover'
import { MoveVertical } from 'lucide-react'
import { ProfileSelectContent } from './profile-select-content'

interface ProfileSelectProps {
  label: string
}

export function ProfileSelect({ label }: ProfileSelectProps) {
  return (
    <Popover.Root>
      <Popover.Trigger
        className="rounded-lg w-44 h-12 cursor-pointer bg-transparent inline-flex items-center justify-center text-white outline-none gap-4"
        aria-label="Update dimensions"
      >
        {label}
        <MoveVertical className="size-4" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded w-72 bg-zinc-900 border-2 border-zinc-700 border-solid shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade px-2"
          sideOffset={5}
        >
          <div className="w-full p-2">
            <h4 className="text-white tex-xl font-semibold">Suas empresas</h4>
          </div>
          <div className="w-full h-0.5 bg-zinc-500 my-2"></div>
          <ProfileSelectContent />
          <Popover.Arrow className="fill-zinc-800" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
