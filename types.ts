export interface Billboard {
    id: string
    label: string
    desc?: string
    imageUrl: string
}

export interface Category {
    id: string
    name: string
    billboard: Billboard
    displayOrder: number
}

export interface Product {
    id: string
    name: string
    price: string
    category: Category
    isFeatured: boolean
    isOnSale: boolean
    color: Color
    images: Image[]
}

export interface Image {
    id: string
    url: string
}

export interface Size {
    id: string
    name: string
    category: {
        name: string
    }
}

export interface Color {
    id: string
    name: string
    value: string
}

export interface OrderItem {
    id: string
    product: Product
    size: Size
    quantity: number
}