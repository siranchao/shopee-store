
export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
})

interface CurrencyProps {
    value?: string | number
    className?: string
}

export default function Currency({ value, className = 'font-semibold' }: CurrencyProps) {
    
    return (
        <div className={className}>
            {formatter.format(Number(value))}
        </div>
    )
}