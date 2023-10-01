
export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
})

interface CurrencyProps {
    value: string | number
}

export default function Currency({ value }: CurrencyProps) {
    
    return (
        <div className="">
            {formatter.format(Number(value))}
        </div>
    )
}