import { useState, useEffect } from "react";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

export default function Sidebar() {
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>(["apple", "watch", "Fashion", "trend", "shoes", "shirt"]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();

        const uniqueCategories = Array.from(
          //neu Set dùng để loại các data trùng lặp, thì Array.from dùng để chuyển Set thành mảng
          new Set(
            // filter hết ra category từ data lấy về ( mảng)
            data.products.map((product) => product.category),
          ),
        );

        setCategories(uniqueCategories);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="w-64 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">React Store</h1>

      <section>
        <input type="text" className="border-2 rounded px-2 sm:mb-0" placeholder="Search Product" />

        <div className="flex justify-center items-center">
          <input type="text" className="border-2 mr-2 px-5 py-3 mb-3 w-full" placeholder="Min" />
          <input type="text" className="border-2 mr-2 px-5 py-3 mb-3 w-full" placeholder="Max" />
        </div>

        {/* categories section */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Categories</h2>
        </div>
        {categories.map((category, index) => (
          <label key={index} className="block mb-2">
            <input type="radio" name="category" value={category} className="mr-2 w-[16px] h-[16px] " />
            {category.toUpperCase()}
          </label>
        ))}

        {/* keywords section */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Keywords</h2>
        </div>
        {keywords.map((keyword, index) => (
          <button key={index} className="block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200">
            {keyword.toUpperCase()}
          </button>
        ))}

        <button className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-5">Reset Filters</button>
      </section>
    </div>
  );
}