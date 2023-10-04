import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;


// add {cache: 'no-store'} make this request not to be cached by Next.js
export async function getSizesByCategory(category: string): Promise<Size[]> {
    const res = await fetch(`${URL}?categoryId=${category}`, {cache: 'no-store'});

    return res.json()
}