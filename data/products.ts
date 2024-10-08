import { graphql } from '@/graphql'

// use apollo graphql extension and 0no-co/graphqlsp extension
export const getProducts = graphql(`
   query products($first: Int = 10, $after: String, $query: String) { 
    products(first: $first, after: $after, query: $query) { 
        edges {
            node {
                id
                title
                description
                handle
                images(first: 1) {
                    edges {
                        node {
                            url
                            altText
                        }
                    }
                }
                variants(first: 1) {
                    edges {
                        node {
                            id
                        }
                    }
                }
                priceRange {
                    minVariantPrice {
                        amount
                        currencyCode
                    }
                }
            }
        }
        pageInfo {
            endCursor
            hasNextPage
        }
    }
}`)


export const getProduct = graphql(`
    query product($handle: String!) {
        product(handle: $handle) {
            id
            title
            description
            handle
            images(first: 1) {
                edges {
                    node {
                        url
                        altText
                    }
                }
            }
            priceRange {
                minVariantPrice {
                    amount
                }
            }
            variants(first: 1) {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    }
`)