import { Card } from "@/components/card";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav hasSearchBar={true} />
      <main>
        <div className="mt-14 mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </>
  );
}
