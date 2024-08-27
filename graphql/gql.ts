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
    "\n   query products($first: Int = 10) { \n    products(first: $first) { \n        edges {\n            node {\n                id\n                title\n                description\n                images(first: 1) {\n                    edges {\n                        node {\n                            url\n                            altText\n                        }\n                    }\n                }\n                priceRangeV2 {\n                    minVariantPrice {\n                        amount\n                        currencyCode\n                    }\n                }\n            }\n        }\n    }\n}": types.ProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query products($first: Int = 10) { \n    products(first: $first) { \n        edges {\n            node {\n                id\n                title\n                description\n                images(first: 1) {\n                    edges {\n                        node {\n                            url\n                            altText\n                        }\n                    }\n                }\n                priceRangeV2 {\n                    minVariantPrice {\n                        amount\n                        currencyCode\n                    }\n                }\n            }\n        }\n    }\n}"): typeof import('./graphql').ProductsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
