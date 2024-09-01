"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { remove } from "@/slides/cartSlide";
import { useEffect, useState } from "react";

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = useAppSelector((state) => state.cart.items);
  const dispatcher = useAppDispatch();

  useEffect(() => {
    if (items.length === 0) setIsOpen(false);
  }, [items]);

  return (
    <div className="relative">
      <button
        id="myCartDropdownButton1"
        data-dropdown-toggle="myCartDropdown1"
        type="button"
        className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900 disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:bg-gray-100"
        disabled={items.length === 0}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Cart</span>
        <svg
          className="w-5 h-5 lg:me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
          />
        </svg>
        <span className="hidden sm:flex">My Cart</span>
        <svg
          className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            id="myCartDropdown1"
            className="absolute right-0 mt-2 w-72 z-10 mx-auto space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg"
          >
            <div className="grid grid-cols-4">
              {items.map((item) => (
                <>
                  <div className="col-span-3">
                    <a
                      href="#"
                      className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline block"
                    >
                      {item.title}
                    </a>
                    <p className="mt-0.5 truncate text-sm font-normal text-gray-500 ">
                      ${item.price}
                    </p>
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      data-tooltip-target="tooltipRemoveItem1a"
                      type="button"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => dispatcher(remove(item))}
                    >
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </>
              ))}
            </div>
            <a
              href="#"
              title=""
              className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
              role="button"
            >
              Proceed to Checkout{" "}
            </a>
          </div>
        </>
      )}
    </div>
  );
};
