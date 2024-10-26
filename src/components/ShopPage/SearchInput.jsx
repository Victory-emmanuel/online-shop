/* eslint-disable react/prop-types */
const SearchInput = ({ searchTerm, handleSearch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className="px-2 py-3 ring-0 bg-primary rounded xs:w-[70dvw] xx:w-[80dvw] focus:outline-none focus:ring-0 placeholder:text-secondary placeholder:text-opacity-50"
        placeholder="Search for a product..."
      />
    </div>
  );
};

export default SearchInput;
