import { useAppDispatch } from "@/hooks/reduxHooks";
import { add } from "@/slides/cartSlide";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  id: string;
  price: number;
  title: string;
  handle: string;
  image: {
    url?: string;
    altText?: string | null;
  };
};
export const Card = ({ id, price, title, handle, image }: CardProps) => {
  const dispatcher = useAppDispatch();

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm ">
      <div className="h-56 w-full hover:opacity-60 transition-opacity duration-800">
        <Link href={`/product/${handle}`}>
          <Image
            className="mx-auto h-full"
            height={200}
            width={200}
            src={
              image.url ||
              "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            }
            alt={image.altText || title}
          />
        </Link>
      </div>
      <div className="pt-6">
        <Link
          href={`/product/${handle}`}
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline min-h-10 block"
        >
          {title}
        </Link>

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-xl font-bold leading-tight text-gray-900">
            ${price}
          </p>

          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300"
            onClick={() => dispatcher(add({ id, price, title }))}
          >
            <svg
              className="-ms-2 me-2 h-5 w-5"
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
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
