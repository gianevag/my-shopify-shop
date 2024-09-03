import { Product } from "@/components/product";
import { Nav } from "@/components/nav";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getProduct } from "@/actions/products";

export default async function Page({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["product", params.id],
    queryFn: () => getProduct({ handle: params.id }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Nav hasSearchBar={false} />
      <main className="py-8 bg-white md:py-16 antialiased">
        <Product handle={params.id} />
      </main>
    </HydrationBoundary>
  );
}
