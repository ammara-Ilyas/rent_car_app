import React from "react";

const FilterComponent = () => {
  return (
    <div className="w-1/4 bg-white p-4 shadow-md">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="space-y-4">
        {/* Filter: Car Type */}
        <div>
          <h3 className="font-semibold">Type</h3>
          <div className="space-y-2">
            {["SUV", "Sedan", "Truck", "Coupe"].map((type) => (
              <div key={type}>
                <input type="checkbox" id={type} className="mr-2" />
                <label htmlFor={type}>{type}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Filter: Price Range */}
        <div>
          <h3 className="font-semibold">Price Range</h3>
          <input type="range" min="0" max="100000" className="w-full" />
          <div className="flex justify-between text-sm">
            <span>$0</span>
            <span>$100k</span>
          </div>
        </div>

        {/* Filter: Brands */}
        <div>
          <h3 className="font-semibold">Brands</h3>
          <div className="space-y-2">
            {["Toyota", "BMW", "Mercedes", "Honda"].map((brand) => (
              <div key={brand}>
                <input type="checkbox" id={brand} className="mr-2" />
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
