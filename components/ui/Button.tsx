import { forwardRef } from 'react'
import { cn } from '@/lib/utils'


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...prop
}, ref) => {

    return (
        <>
            <button
                className={cn(`
                    min-w-[60px]
                    rounded-full
                    bg-black
                    border-transparent
                    px-5
                    py-3
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    text-white
                    font-semibold
                    hover:opacity-75
                    transition
                `, className)}
                disabled={disabled}
                ref={ref}
                {...prop}
            >
                {children}
            </button>
        </>
    )
})

Button.displayName = 'Button'

export default Button;