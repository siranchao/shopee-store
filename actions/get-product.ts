import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;


// add {cache: 'no-store'} make this request not to be cached by Next.js
export async function getProduct(id: string): Promise<Product> {
    const res = await fetch(`${URL}/${id}`, {cache: 'no-store'});
    const data = await res.json();

    return data[0]
}