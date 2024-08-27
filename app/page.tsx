import { Nav } from "@/components/nav";
import { ProductList } from "@/components/productList";
import { getProducts } from "@/data/products";
import { gqlRequest } from "@/lib/graphqlClient";

export default async function Home() {
  const data = await gqlRequest(getProducts, { first: 12 });

  return (
    <>
      <Nav hasSearchBar={true} />
      <main>
        <ProductList products={data} />
      </main>
    </>
  );
}
