/* eslint-disable react/no-unescaped-entities */
import { useState, useRef, useEffect } from "react";
import { productData } from "../database/ProductData";
import SearchInput from "../components/ShopPage/SearchInput";
import ProductList from "../components/ShopPage/ProductList";
import CategoryFilter from "../components/ShopPage/CategoryFilter";
import PriceRangeFilter from "../components/ShopPage/PriceRangeFilter";
import { IoMdCloseCircle } from "react-icons/io";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Dropdown state

  // Reference to close the dropdown when clicking outside
  const dropdownRef = useRef(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
  };

  // Reset filters function
  const handleResetFilters = () => {
    setSearchTerm(""); // Clear search
    setSelectedCategory("all"); // Reset category
    setSelectedPriceRange(null); // Reset price range
    setIsOpen(false); // Close menu when reset
  };

  const filteredProducts = productData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice =
      !selectedPriceRange ||
      (product.price >= selectedPriceRange.min &&
        product.price <= selectedPriceRange.max);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Handle outside click to close the dropdown
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // Add an event listener for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="shopage" className="py-16 bg-white dark:bg-black">
      <div className="mb-12 ">
        <h1 className="ss:text-4xl text-2xl font-bold mb-4 ss:pl-12 xx:pl-6">
          Welcome! To <span className="text-accent "> Jasmaine's Store</span>
        </h1>
      </div>

      <div className="ss:px-12 xx:px-6  flex flex-row flex-wrap  gap-4 items-center">
        <div className="">
          <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
        </div>

        {/* Custom Dropdown for Filter */}
        <div className="relative flex items-center " ref={dropdownRef}>
          <div className="flex space-x-4 mb-7">
            <button
              className="bg-accent text-white px-4 py-2.5 mt-4 rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              Apply Filter
            </button>
            <button
              className="bg-accent text-white px-4 py-2.5 mt-4 rounded"
              onClick={handleResetFilters}
            >
              Clear All Filters
            </button>
          </div>

          {isOpen && (
            <div className="absolute z-50 mt-2 w-auto bg-primary shadow-lg rounded-md p-4">
              <div className="w-full flex justify-end">
                <IoMdCloseCircle
                  className="h-5 w-5 text-accent cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <div className="mt-2">
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  handleCategoryChange={handleCategoryChange}
                />
              </div>
              <div className="mt-2">
                <PriceRangeFilter
                  selectedPriceRange={selectedPriceRange}
                  handlePriceRangeChange={handlePriceRangeChange}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="py-16">
        <ProductList filteredProducts={filteredProducts} />
      </div>
    </div>
  );
};

export default Shop;
