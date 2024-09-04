import { getProduct, getProducts } from "@/actions/products";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useGetProducts = (searchInput?: string | null) => {
  const fetchMoreProducts = async ({ pageParam }: { pageParam: string }) => {
    const data = await getProducts({
      cursor: pageParam,
      search: searchInput || "",
    });
    return data;
  };

  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchMoreProducts,
    initialPageParam: "",
    getNextPageParam: (lastPage) => {
      if (lastPage.success?.products.pageInfo.hasNextPage === false) {
        return null;
      }
      return lastPage.success?.products.pageInfo.endCursor;
    },
    refetchOnWindowFocus: false,
    enabled: false,
  });
};

export const useGetProduct = (handle: string) => {
  return useQuery({
    queryKey: ["product", handle],
    queryFn: () => getProduct({ handle }),
    refetchOnWindowFocus: false,
    enabled: false,
  });
};
