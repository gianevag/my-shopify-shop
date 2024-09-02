import { graphql } from '@/graphql'


export const CartCreate = graphql(`
    mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
            cart {
                checkoutUrl
            }
        }
    }
    `)