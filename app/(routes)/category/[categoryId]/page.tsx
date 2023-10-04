import { getProducts } from "@/actions/get-products"


interface CategoryPageProps {
    params: {
        categoryId: string
    }
    searchParams: {
        colorId: string
        sizeId: string
    }
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {

    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    })


    return (
        <>
        </>
    )
}