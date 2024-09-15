'use client'

import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { AlignJustify, LayoutGrid } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function ToogleView() {
  const [view, setView] = useState('grid')
  const router = useRouter()

  useEffect(() => {
    router.replace(`/products?view=${view}`)
  }, [view, router])

  const toggleGroupItemClasses =
    'hover:bg-violet3 bg-transparent text-white data-[state=on]:bg-zinc-950 data-[state=on]:text-white flex h-[35px] w-[35px] items-center justify-center text-base leading-4 first:rounded-l last:rounded-r'

  return (
    <ToggleGroup.Root
      className="inline-flex bg-mauve6 border border-solid border-zinc-400 rounded shadow-[0_2px_10px] shadow-blackA4 space-x-px"
      type="single"
      defaultValue={view}
      aria-label="Text alignment"
      onValueChange={setView}
    >
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="grid"
        aria-label="Left aligned"
      >
        <LayoutGrid className="text-white size-4" />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="list"
        aria-label="Center aligned"
      >
        <AlignJustify className="text-white size-4" />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}
