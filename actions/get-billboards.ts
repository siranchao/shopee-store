import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;


// add {cache: 'no-store'} make this request not to be cached by Next.js
export async function getBillboard(id: string): Promise<Billboard> {
    const res = await fetch(`${URL}/${id}`, {cache: 'no-store'});
    const data = await res.json();

    return data[0]
}