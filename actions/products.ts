'use server'

import { gqlRequest } from "@/lib/graphqlClient";
import { getProducts as _getProducts, getProduct as _getProduct} from "@/data/products";

export const getProducts = async({ first = 10, cursor = "", search = "" }: {first?: number, cursor?: string, search?: string}) => { 
    console.log("actions > products > getProducts");
    try {
        const data = await gqlRequest(_getProducts, { first, query: search, ...(cursor ? { after: cursor } : {}) });
        return {success: data, error: null};
    } catch (error) {
        console.log("Error > actions > products > getProducts: ", error);
        return { success: null, error: error };
    }
}

export const getProduct = async({ handle }: {handle: string}) => {
    console.log("actions > products > getProduct");
    try {
        const data = await gqlRequest(_getProduct, { handle });
        return {success: data, error: null};
    } catch (error) {
        console.log("Error > actions > products > getProduct: ", error);
        return { success: null, error: error };
    }
}