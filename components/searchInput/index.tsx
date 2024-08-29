"use client";

import { debounce } from "@/lib/debounce";
import { useMemo } from "react";

type SearchinputProps = {
  onDebouncedChange?: (arg: string) => void;
};

export const SearchInput = ({ onDebouncedChange }: SearchinputProps) => {
  // we call the debounce function to useMemo to avoid creating a new function on every render
  // and to avoid calling the debounce function on every render
  const inputDebounce = useMemo(() => {
    if (!onDebouncedChange) return () => {};

    // the input values for the callback function is the same with the return function that use in handleInput
    return debounce((i: string) => onDebouncedChange(i), 800);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputDebounce(e.target.value);
  };

  return (
    <form className="w-full">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 "
          placeholder="Search Products..."
          onChange={handleInput}
        />
      </div>
    </form>
  );
};
