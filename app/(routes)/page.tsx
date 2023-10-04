import Container from "@/components/ui/Container"
import Billboard from "@/components/Billboard"
import ProductList from "@/components/ProductList"
import { getBillboard } from "@/actions/get-billboards"
import { getProducts } from "@/actions/get-products"

export default async function HomePage() {
    const billboard = await getBillboard("6913a40e-f6c3-4b53-9563-09d9796954d1")
    const products = await getProducts({})

    return (
        <>
            <Container>
                <div className="space-y-10 pb-10">
                    <Billboard data={billboard}/>

                    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                        <ProductList title="Featured Products" items={products} />
                    </div>
                </div>
            </Container>
        </>
    )
}