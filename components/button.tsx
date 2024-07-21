import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<'button'> {
    children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            className="w-full h-12 flex items-center justify-center bg-orange-600 rounded text-white font-semibold hover:bg-orange-700 transition-colors disabled:cursor-not-allowed disabled:bg-zinc-400"
            {...props}>
            {children}
        </button>
    )
}