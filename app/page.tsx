import { Nav } from "@/components/nav";
import { ProductList } from "@/components/productList";
import { getProducts } from "@/actions/products";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Nav hasSearchBar={true} />
      <main>
        <ProductList />
      </main>
    </HydrationBoundary>
  );
}
