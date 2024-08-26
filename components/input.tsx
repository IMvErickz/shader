import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="w-full h-12 bg-zinc-900 border border-zinc-500 border-solid placeholder:text-zinc-500 pl-2 text-white rounded"
    />
  )
}
