import { graphql } from '@/graphql'

// use apollo graphql extension and 0no-co/graphqlsp extension
export const getProducts = graphql(`
   query products($first: Int = 10) { 
    products(first: $first) { 
        edges {
            node {
                id
                title
                description
                images(first: 1) {
                    edges {
                        node {
                            url
                            altText
                        }
                    }
                }
                priceRangeV2 {
                    minVariantPrice {
                        amount
                        currencyCode
                    }
                }
            }
        }
    }
}`)


