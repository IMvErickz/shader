import { ComponentProps, ReactNode } from "react";
import { twMerge, twJoin } from "tailwind-merge";

interface ButtonProps extends ComponentProps<'button'> {
    children: ReactNode
}

export function Button({ children, className, ...props }: ButtonProps) {
    const mergedClassName = twJoin('w-full h-12 flex items-center justify-center bg-orange-600 rounded text-white font-semibold hover:bg-orange-700 transition-colors disabled:cursor-not-allowed disabled:bg-zinc-400', className)

    return (
        <button
            className={mergedClassName}
            {...props}>
            {children}
        </button>
    )
}