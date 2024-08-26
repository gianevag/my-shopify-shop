import { Product } from "@/components/product";
import { Nav } from "@/components/nav";

export default function Page() {
  return (
    <>
      <Nav hasSearchBar={false} />
      <main className="py-8 bg-white md:py-16 antialiased">
        <Product />
      </main>
    </>
  );
}
