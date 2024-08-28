import { Nav } from "@/components/nav";
import { ProductList } from "@/components/productList";
import { getProducts } from "@/actions/products";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const fetchMoreProducts = async ({ pageParam }: { pageParam: string }) => {
    const data = await getProducts({ cursor: pageParam });
    return data;
  };

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchMoreProducts,
    initialPageParam: "",
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
