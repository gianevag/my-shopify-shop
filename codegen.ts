require('dotenv').config({ path: ['.env.local', '.env'] })
console.log(process.env.SHOPIFY_STOREFRONT_API_URL)

import type { CodegenConfig } from '@graphql-codegen/cli'

const endpoint = process.env.SHOPIFY_STOREFRONT_API_URL || ""

const config: CodegenConfig = {
  schema: [{
      [endpoint]: {
          headers: {
              "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_API_TOKEN|| "",
          }
  } }],
  documents: ['data/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './graphql/': {
      preset: 'client',
      config: {
        documentMode: 'string'
      }
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true
      }
    }
  }
}
 
export default config