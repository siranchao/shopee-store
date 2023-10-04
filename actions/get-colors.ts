import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;


// add {cache: 'no-store'} make this request not to be cached by Next.js
export async function getColors(): Promise<Color[]> {
    const res = await fetch(URL, {cache: 'no-store'});

    return res.json()
}