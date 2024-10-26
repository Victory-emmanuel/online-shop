/* eslint-disable react/prop-types */
// components/ShopPage/PriceRangeFilter.jsx

const PriceRangeFilter = ({ selectedPriceRange, handlePriceRangeChange }) => {
  const priceRanges = [
    { label: "1.00 - 50.00", min: 1, max: 50 },
    { label: "51.00 - 100.00", min: 51, max: 100 },
    { label: "101.00 - 150.00", min: 101, max: 150 },
    { label: "151.00 - 200.00", min: 151, max: 200 },
    { label: "201.00 and above", min: 201, max: Infinity },
  ];

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2 text-accent">
        Filter by price
      </h3>
      {priceRanges.map((range, index) => (
        <div key={index} className="block">
          <label className="  space-x-4  mb-2 text-secondary ">
            <input
              type="radio"
              name="priceRange"
              value={range.label}
              checked={selectedPriceRange === range.label}
              onChange={() => handlePriceRangeChange(range)}
              className="mr-2 text=accent bg-primary
              focus:ring-accent focus:ring-2 focus:ring-opacity-50"
            />
            {range.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PriceRangeFilter;
