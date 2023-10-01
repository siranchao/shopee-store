import Container from "@/components/ui/Container"
import Billboard from "@/components/Billboard"
import ProductList from "@/components/ProductList"
import { getBillboard } from "@/actions/get-billboards"
import { getProducts } from "@/actions/get-products"

export default async function HomePage() {
    const billboard = await getBillboard("d546cd2f-9bdc-4539-a672-0a21906f70c4")
    const products = await getProducts({isFeatured: "true"})

    return (
        <>
            <Container>
                <div className="space-y-10 pb-10">
                    <Billboard data={billboard}/>
                </div>

                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </Container>
        </>
    )
}