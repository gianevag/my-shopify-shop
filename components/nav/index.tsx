"use client";

import { useEffect, useState } from "react";
import { Cart } from "../cart";
import { SearchInput } from "../searchInput";
import Image from "next/image";
import { useGetProducts } from "@/hooks/useGetProducts";
import Link from "next/link";

type NavProps = {
  hasSearchBar?: boolean;
};

export const Nav = ({ hasSearchBar }: NavProps) => {
  // Add the search input to the parent because we use the search input twice for defferent screen sizes
  // and if we add a react-query hook to the search input component, it will be called twice
  // so for performance reasons, we add the search input to the parent component
  const [seachIput, setSearchInput] = useState<string | null>(null);
  const { refetch } = useGetProducts(seachIput);

  useEffect(() => {
    if (hasSearchBar && seachIput !== null) refetch();
  }, [seachIput]);

  const handleSearchInput = (input: string) => {
    setSearchInput(input);
  };

  return (
    <nav className="bg-white antialiased">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/">
            <Image
              width={100}
              height={20}
              className="block w-auto h-28"
              src="/logo/logo.png"
              alt="logo"
            />
          </Link>
        </div>

        {hasSearchBar && (
          <div className="hidden md:block md:w-[70%]">
            <SearchInput onDebouncedChange={handleSearchInput} />
          </div>
        )}

        <div className="flex items-center">
          <Cart />
        </div>
      </div>

      {hasSearchBar && (
        <div className="md:hidden mt-4">
          <SearchInput onDebouncedChange={handleSearchInput} />
        </div>
      )}
    </nav>
  );
};
