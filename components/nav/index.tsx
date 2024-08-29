"use client";

import { useEffect, useState } from "react";
import { Cart } from "../cart";
import { SearchInput } from "../searchInput";
import Image from "next/image";
import { useGetProducts } from "@/hooks/useGetProducts";

type NavProps = {
  hasSearchBar?: boolean;
};

export const Nav = ({ hasSearchBar }: NavProps) => {
  // Add the search input to the parent because we use the search input twice for defferent screen sizes
  // and if we add a react-query hook to the search input component, it will be called twice
  // so for performance reasons, we add the search input to the parent component
  const [seachIput, setSearchInput] = useState("");
  const { refetch } = useGetProducts(seachIput);
  useEffect(() => {
    refetch();
  }, [seachIput]);

  const handleSearchInput = (input: string) => {
    setSearchInput(input);
  };

  return (
    <nav className="bg-white antialiased">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="shrink-0">
            <a href="#" title="" className="">
              <Image
                width={200}
                height={50}
                className="block w-auto h-8"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                alt="logo"
              />
            </a>
          </div>
        </div>

        {hasSearchBar && (
          <div className="hidden md:block md:w-[60%]">
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
