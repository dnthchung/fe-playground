import { useState } from "react";
import { useFilter } from "./filterContext";
import { Tally3 } from "lucide-react";

const MainContent = () => {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, minPrice, setMinPrice, maxPrice, setMaxPrice, keyword, setKeyword } = useFilter();
  const [products, setProducts] = useState<any[]>([]); // Manages a list of products.
  const [filter, setFilter] = useState("all"); // Manages the filter state, defaulting to "all".
  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page for pagination.
  const [dropdownOpen, setDropdownOpen] = useState(false); // Tracks whether a dropdown is open.
  const itemsPerPage = 12; // Constant for the number of items to display per page.

  return (
    <section className="xl:w-[55rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5">
      <div className="mb-5">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="relative mb-5 mt-5">
            <button className="border px-4 py-2 rounded-full flex items-center">
              <Tally3 className="mr-2" />
              {filter === " all" ? "Filter" : filter.charAt(0).toLowerCase() + filter.slice(1)}
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white border border-gray-300 rounded mt-2 w-full sm:w-40">
                <button onClick={() => setFilter("cheap")} className="block px-4 py-2 w-full text-left hover:bg-gray-200">
                  {/* Add content here */}
                  Cheap
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
