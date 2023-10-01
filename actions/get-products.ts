import { Product } from "@/types";
import queryString from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string
    sizeId?: string
    colorId?: string
    isFeatured?: "true" | "false"
}

// add {cache: 'no-store'} make this request not to be cached by Next.js
export async function getProducts( searchQuery: Query ): Promise<Product[]> {
    const url = queryString.stringifyUrl({
        url: URL,
        query: {
            ...searchQuery
        }
    })

    const res = await fetch(url, {cache: 'no-store'});

    return res.json()
}