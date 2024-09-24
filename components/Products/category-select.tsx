import * as Popover from '@radix-ui/react-popover'
import { useState } from 'react'

export function CategorySelect() {
  const [measure, setMeasure] = useState('Selecione a unidade de medida')

  function handleChangeMeasure(value: string) {
    setMeasure(value)
  }

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="rounded-lg w-full h-[35px] cursor-pointer border-2 border-slate-600 border-solid inline-flex items-center justify-center text-white bg-zinc-800 outline-none"
          aria-label="Update dimensions"
        >
          {measure}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded w-72 bg-zinc-800 border-2 border-zinc-700 border-solid shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <div className="w-full flex flex-col gap-y-2 mb-2">
            <button
              className="size-full flex justify-center gap-x-2 text-white"
              onClick={() => handleChangeMeasure('unity')}
            >
              Unidade
            </button>

            <button
              className="size-full flex justify-center gap-x-2 text-white"
              onClick={() => handleChangeMeasure('weight')}
            >
              Peso
            </button>

            <button
              className="size-full flex justify-center gap-x-2 text-white"
              onClick={() => handleChangeMeasure('liter')}
            >
              Litro
            </button>
          </div>
          <Popover.Arrow className="fill-zinc-800" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
