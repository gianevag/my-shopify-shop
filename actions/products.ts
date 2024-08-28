'use server'

import { gqlRequest } from "@/lib/graphqlClient";
import { getProducts as _getProducts } from "@/data/products";

export const getProducts = async () => { 
    console.log("actions > products > getProducts");
    try {
        const data = await gqlRequest(_getProducts, { first: 10 });
        return {success: data};
    } catch (error) {
        console.log("error > actions > products > getProducts: ", error);
        return { error: error };
    }
}