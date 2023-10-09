import Container from "@/components/ui/Container"
import Billboard from "@/components/Billboard"
import ProductList from "@/components/ProductList"
import { getBillboard } from "@/actions/get-billboards"
import { getProducts } from "@/actions/get-products"

export default async function HomePage() {
    const billboard_primary = await getBillboard(process.env.NEXT_PUBLIC_PRIME_BILLBOARD!)
    const billboard_secondary = await getBillboard(process.env.NEXT_PUBLIC_SECOND_BILLBOARD!)

    const products_primary = await getProducts({isFeatured: "true"})
    const products_secondary = await getProducts({categoryId: process.env.NEXT_PUBLIC_SECOND_CATEGORY_ID})

    return (
        <>
            <Container>
                <div className="space-y-10 pb-10">
                    <Billboard data={billboard_primary}/>

                    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                        <ProductList title="Featured Products" items={products_primary} />
                    </div>
                </div>
            </Container>

            <Container>
                <div className="space-y-10 pb-10">
                    <Billboard data={billboard_secondary}/>

                    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                        <ProductList title="Limited Time Offer" items={products_secondary} />
                    </div>
                </div>
            </Container>
        </>
    )
}