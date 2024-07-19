'use client'

import { Eye, EyeOff } from "lucide-react"
import { ComponentProps, useState } from "react"

interface InputProps extends ComponentProps<'input'> { }

export function InputPassword({ ...props }: InputProps) {
    const [type, setType] = useState('password')

    function handleChangeType() {
        if (type === 'password') {
            setType('text')
        }

        if (type === 'text') {
            setType('password')
        }
    }

    return (
        <div className="w-full h-12 flex bg-zinc-900 border border-zinc-500 border-solid rounded px-2 focus-within:border-white">
            <input
                {...props}
                type={type}
                className="size-full bg-transparent placeholder:text-zinc-500 text-white outline-none"
            />
            <button type="button" onClick={handleChangeType}>
                {type === 'password' && (<Eye className="text-zinc-500" />)}
                {type === 'text' && (<EyeOff className="text-zinc-500" />)}

            </button>
        </div>
    )
}