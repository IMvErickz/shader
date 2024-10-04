import { tv } from 'tailwind-variants'

export const input = tv({
  variants: {
    default: {
      primary:
        'w-full h-12 bg-zinc-900 border border-zinc-500 border-solid placeholder:text-zinc-500 pl-2 text-white rounded',
    },
  },
})
