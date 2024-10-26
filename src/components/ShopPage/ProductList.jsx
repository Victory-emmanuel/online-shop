/* eslint-disable react/prop-types */
// components/ProductList.jsx

import ProductCard from "../Universal/ProductCard";

// Assuming you already have this

const ProductList = ({ filteredProducts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <p className="text-center col-span-full text-secondary">
          No products found.
        </p>
      )}
    </div>
  );
};

export default ProductList;
