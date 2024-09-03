/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation cartCreate($input: CartInput!) {\n        cartCreate(input: $input) {\n            cart {\n                checkoutUrl\n            }\n        }\n    }\n    ": types.CartCreateDocument,
    "\n   query products($first: Int = 10, $after: String, $query: String) { \n    products(first: $first, after: $after, query: $query) { \n        edges {\n            node {\n                id\n                title\n                description\n                handle\n                images(first: 1) {\n                    edges {\n                        node {\n                            url\n                            altText\n                        }\n                    }\n                }\n                variants(first: 1) {\n                    edges {\n                        node {\n                            id\n                        }\n                    }\n                }\n                priceRange {\n                    minVariantPrice {\n                        amount\n                        currencyCode\n                    }\n                }\n            }\n        }\n        pageInfo {\n            endCursor\n            hasNextPage\n        }\n    }\n}": types.ProductsDocument,
    "\n    query product($handle: String!) {\n        product(handle: $handle) {\n            id\n            title\n            description\n            handle\n            images(first: 1) {\n                edges {\n                    node {\n                        url\n                        altText\n                    }\n                }\n            }\n            priceRange {\n                minVariantPrice {\n                    amount\n                }\n            }\n            variants(first: 1) {\n                edges {\n                    node {\n                        id\n                    }\n                }\n            }\n        }\n    }\n": types.ProductDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation cartCreate($input: CartInput!) {\n        cartCreate(input: $input) {\n            cart {\n                checkoutUrl\n            }\n        }\n    }\n    "): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query products($first: Int = 10, $after: String, $query: String) { \n    products(first: $first, after: $after, query: $query) { \n        edges {\n            node {\n                id\n                title\n                description\n                handle\n                images(first: 1) {\n                    edges {\n                        node {\n                            url\n                            altText\n                        }\n                    }\n                }\n                variants(first: 1) {\n                    edges {\n                        node {\n                            id\n                        }\n                    }\n                }\n                priceRange {\n                    minVariantPrice {\n                        amount\n                        currencyCode\n                    }\n                }\n            }\n        }\n        pageInfo {\n            endCursor\n            hasNextPage\n        }\n    }\n}"): typeof import('./graphql').ProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query product($handle: String!) {\n        product(handle: $handle) {\n            id\n            title\n            description\n            handle\n            images(first: 1) {\n                edges {\n                    node {\n                        url\n                        altText\n                    }\n                }\n            }\n            priceRange {\n                minVariantPrice {\n                    amount\n                }\n            }\n            variants(first: 1) {\n                edges {\n                    node {\n                        id\n                    }\n                }\n            }\n        }\n    }\n"): typeof import('./graphql').ProductDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
