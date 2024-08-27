import { ProductsQuery } from "@/graphql/graphql";
import { Card } from "../card";

type ProductListProps = {
  products: ProductsQuery;
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="mt-14 mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      {products.products.edges.map((product) => (
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
