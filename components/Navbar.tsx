import Link from "next/link";
import Container from "./ui/Container";
import MainNav from "./MainNav";
import NavbarActions from "./NavbarActions";

import { getCategories } from "@/actions/get-categories"



export default async function Navbar() {
    const categories = await getCategories()
    categories.sort((a, b) => {
        return a.displayOrder - b.displayOrder
    })

    return (
        <nav className="border-b">
            <Container>
                <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="mx-4 flex gap-x-2 lg:ml-0">
                        <p className="font-bold text-xl">SHOPEE</p>
                    </Link>

                    <MainNav data={categories}/>
                    
                    <NavbarActions />
                </div>
            </Container>
        </nav>
    )
}