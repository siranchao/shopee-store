import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;


// add {cache: 'no-store'} make this request not to be cached by Next.js
export async function getCategory(id: string): Promise<Category> {
    const res = await fetch(`${URL}/${id}`, {cache: 'no-store'});
    const data = await res.json();

    return data[0]
}