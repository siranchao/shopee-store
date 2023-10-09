import { getProduct } from "@/actions/get-product"
import { getProducts } from "@/actions/get-products"
import ProductList from "@/components/ProductList"
import Container from "@/components/ui/Container"
import Gallery from "@/components/gallery"
import Info from "@/components/Info"


interface ProductDetailProps {
    params: {
        productId: string
    }
}

export async function generateMetadata( { params }: ProductDetailProps) {
    const res = await getProduct(params.productId)
    return {
        title: res.name,
        description: `Shopee Store - product name: ${res.name}`
    }
}

export default async function ProductDetail({ params }: ProductDetailProps) {
    const product = await getProduct(params.productId)

    const products = await getProducts({
        categoryId: product?.category?.id,
    })

    const suggestedProducts = products.filter((product) => product.id !== params.productId)

    return (
        <>
            <div className="bg-white">
                <Container>
                    <div className="px-4 py-10 sm:px-6 lg:px-8">
                        <div className="lg:grid lg: grid-cols-2 lg:items-start lg:gap-x-8">
                            <Gallery images={product?.images} />

                            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                                <Info data={product} />
                            </div>
                        </div>
                        <hr className="my-10"/>
                        <ProductList title="Related Products" items={suggestedProducts} />

                    </div>
                </Container>
                
            </div>
        </>
    )
}