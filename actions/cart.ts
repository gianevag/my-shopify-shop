'use server'

import { CartCreate } from "@/data/cart";
import { CartInput } from "@/graphql/graphql";
import { gqlRequest } from "@/lib/graphqlClient";

export const createCart = async (cartInput: CartInput) => {
    console.log("actions > cart > createCart");
    try {
        const data = await gqlRequest(CartCreate, { input: cartInput });
        return { success: data, error: null };
    } catch (error) {
        console.log("Error > actions > cart > createCart: ", error);
        return { success: null, error: error };
    }
 }