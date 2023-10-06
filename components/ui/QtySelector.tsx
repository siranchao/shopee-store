'use client';
import "@/styles/qty-selector.css"

interface QtySelectorProps {
    qty: number
    handleIncrease: () => void
    handleDecrease: () => void
}

export default function QtySelector({ qty, handleIncrease, handleDecrease }: QtySelectorProps) {

    return (
        <>
            <span className="quantity-picker">
                <button className="quantity-modifier modifier-left" onClick={handleDecrease} disabled={qty === 1}>&ndash;</button>
                <input className="quantity-display" type="text" value={qty} readOnly />
                <button className="quantity-modifier modifier-right" onClick={handleIncrease}>&#xff0b;</button>
            </span>
        </>
    )   
}