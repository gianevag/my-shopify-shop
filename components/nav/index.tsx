import { Cart } from "../cart";
import { SearchInput } from "../searchInput";

type NavProps = {
  hasSearchBar?: boolean;
};

export const Nav = ({ hasSearchBar }: NavProps) => {
  return (
    <nav className="bg-white antialiased">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="shrink-0">
            <a href="#" title="" className="">
              <img
                className="block w-auto h-8"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                alt=""
              />
            </a>
          </div>
        </div>

        {hasSearchBar && (
          <div className="hidden md:block md:w-[60%]">
            <SearchInput />
          </div>
        )}

        <div className="flex items-center">
          <Cart />
        </div>
      </div>

      {hasSearchBar && (
        <div className="md:hidden mt-4">
          <SearchInput />
        </div>
      )}
    </nav>
  );
};
