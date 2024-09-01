"use client";

import { Card } from "../card";
import React, { useRef } from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useGetProducts } from "@/hooks/useGetProducts";

export const ProductList = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGetProducts();

  // when the target element is intersecting with the viewport then fetch the next page
  useInfiniteScroll(
    targetRef,
    { root: null, rootMargin: "0px", threshold: 1 },
    () => fetchNextPage()
  );

  if (error) return <div>Error loading products</div>;

  return (
    <>
      <div className="mt-6 mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        {data?.pages.map((page, i) => {
          return (
            <React.Fragment key={i}>
              {page.success?.products.edges.map(({ node }) => {
                return (
                  <Card
                    key={node.id}
                    id={node.id}
                    title={node.title}
                    price={node.priceRangeV2.minVariantPrice.amount}
                    image={{
                      url: node.images.edges[0].node.url,
                      altText: node.images.edges[0].node.altText,
                    }}
                  />
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
      {isFetching ||
        (hasNextPage && !isFetchingNextPage && (
          <div className="text-center" ref={targetRef}>
            Loading...
          </div>
        ))}
    </>
  );
};
