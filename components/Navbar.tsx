import Link from "next/link";
import Container from "./ui/Container";
import MainNav from "./MainNav";
import { getCategories } from "@/actions/get-categories"



export default async function Navbar() {
    const categories = await getCategories()
    const sortedCategories = categories.sort((a, b) => {
        return a.displayOrder - b.displayOrder
    })

    return (
        <nav className="border-b">
            <Container>
                <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
                        <p className="font-bold text-xl">STORE</p>
                    </Link>

                    <MainNav data={categories}/>

                </div>
            </Container>
        </nav>
    )
}