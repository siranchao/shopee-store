import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { OrderItem } from "@/types";
import toast from "react-hot-toast";

interface CartStore {
    items: OrderItem[];
    addToCart: (data: OrderItem) => void;
    removeFromCart: (id: string) => void;
    removeAll: () => void;
    increaseQty: (id: string) => void;
    decreaseQty: (id: string) => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addToCart: (data) => {
            //ok
            const items = get().items
            const item = items.find(item => item.product.id === data.product.id)
            if (item) {
                if(item.size.id === data.size.id) {
                    item.quantity += data.quantity
                    set({ items: items })
                } else {
                    set({ items: [...items, data] })
                }
            }
            else {
                set({ items: [...items, data] })
            }
        
            toast.success("Item added to cart")
        },
        removeFromCart: (id) => {
            //ok
            const newItems = get().items.filter(item => item.product.id !== id)
            set({ items: newItems })
            toast.success("Item removed from cart")
        },
        removeAll: () => {
            //ok
            set({ items: [] })
            toast.success("Cart cleared")
        },
        increaseQty: (id) => {
            //ok
            const currentItems = get().items
            const targetItem = currentItems.find(item => item.product.id === id)
            if(targetItem) {
                targetItem.quantity += 1
                set({ items: currentItems })
            }
        },
        decreaseQty: (id) => {
            //ok
            const currentItems = get().items
            const targetItem = currentItems.find(item => item.product.id === id)
            if(targetItem && targetItem.quantity > 1) {
                targetItem.quantity -= 1
                set({ items: currentItems })
            }
        }
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)


export default useCart;