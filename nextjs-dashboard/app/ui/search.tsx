"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
//Dùng để delay lại quá trình search, kiểu người ta gõ xong cả từ, delay lại
//1 xíu rồi mới hiện kết quả
//tránh call API quá nhiều
import { useDebouncedCallback } from "use-debounce"; //prevents a new database query on every keystroke, thus saving resources.

export default function Search({ placeholder }: { placeholder: string }) {
  /**
   * useSearchParams - Allows you to access the parameters of the current URL. For example, the search params for this URL /dashboard/invoices?page=1&query=pending would look like this: {page: '1', query: 'pending'}.
   * usePathname - Lets you read the current URL's pathname. For example, for the route /dashboard/invoices, usePathname would return '/dashboard/invoices'
   * useRouter - Enables navigation between routes within client components programmatically. There are multiple methods you can use.
   *
   * step 1 : Capture the user's input in the search field.
   * step 2 : Update the URL with the search params
   * step 3 : Keeping the URL and input in sync
   */

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(myTerm: string) {
    // console.log(`Searching... ${myTerm}`);
    //lấy ra input người dùng từ trên url
    const myParams = new URLSearchParams(searchParams);
    if (myTerm) {
      myParams.set("query", myTerm);
    } else {
      myParams.delete("query");
    }
    // Update the URL with the new search params
    replace(`${pathname}?${myParams.toString()}`);
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        id="search"
        type="search"
        onChange={(e) => handleSearch(e.target.value)}
        // Keeping the URL and input in sync - use Value for useState
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
