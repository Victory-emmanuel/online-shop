/* eslint-disable react/prop-types */
const CategoryFilter = ({ selectedCategory, handleCategoryChange }) => {
  const categories = [
    { display: "All", value: "all" },
    { display: "Bags", value: "bag" },
    { display: "Shoes", value: "shoe" },
    { display: "Slippers", value: "slipper" },
    { display: "Heels", value: "heel" },
    { display: "Accessories", value: "accessory" },
  ];

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2 text-accent">
        Filter by Category
      </h2>
      <div className="w-full  xx:scroll-my-4 xx:overflow-x-scroll ss:overflow-hidden">
        <div className="flex space-x-2 space-y-2 xx:flex-wrap ss:flex-nowrap py-6 ">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category.value
                  ? "bg-accent text-primary"
                  : "bg-primary text-secondary"
              } hover:bg-accent hover:text-primary  xx:drop-shadow xx:shadow-secondary  transition-all duration-300`}
            >
              {category.display}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
