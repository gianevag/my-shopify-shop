import { TypedDocumentString } from "@/graphql/graphql"
import { GraphQLClient } from 'graphql-request'


const endpoint = process.env.SHOPIFY_ADMIN_API_URL || ""


export const gqlClient = new GraphQLClient(endpoint, {
    headers: {
      "Content-Type": 'application/json',
      "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_API_TOKEN || "",
  },
})



export const gqlRequest  = async <TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) => { 
    
    try {
        const data = await gqlClient.request(query.toString() , variables as object)
        return data as TResult
    } catch (error) {
        throw error
    }

}