"use client";

import { Card } from "../card";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/actions/products";

export const ProductList = () => {
  const { data, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => getProducts(),
  });

  if (error) return <div>Error loading products</div>;

  return (
    <div className="mt-14 mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      {data?.success?.products.edges.map((product) => (
        <Card
          key={product.node.id}
          title={product.node.title}
          price={product.node.priceRangeV2.minVariantPrice.amount}
          image={{
            url: product.node.images.edges[0]?.node.url,
            altText: product.node.images.edges[0]?.node.altText,
          }}
        />
      ))}
    </div>
  );
};
