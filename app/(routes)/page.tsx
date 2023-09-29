import Container from "@/components/ui/Container"
import Billboard from "@/components/Billboard"
import { getBillboard } from "@/actions/get-billboards"

export default async function HomePage() {
    const billboard = await getBillboard("d546cd2f-9bdc-4539-a672-0a21906f70c4")

    return (
        <>
            <Container>
                <div className="space-y-10 pb-10">
                    <Billboard data={billboard}/>
                </div>
            </Container>
        </>
    )
}