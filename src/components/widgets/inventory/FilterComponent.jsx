"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useCarContext } from "@/contextApi/CarContext";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";
import { Checkbox, Collapse, FormControlLabel } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Language } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";
const SidebarFilter = () => {
  const { setInventory, inventory, forFilteredInventory } = useCarContext();
  const [expandedSections, setExpandedSections] = useState([]);
  const [checkedOptions, setCheckedOptions] = useState({});
  const [filterData, setFilteredData] = useState({});

  // Toggle the expansion of filter sections
  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section]
    );
  };

  const isSectionExpanded = (section) => expandedSections.includes(section);

  // Update checkedOptions state when a checkbox is toggled
  const handleCheckboxChange = (label, category) => {
    setCheckedOptions((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [label]: !prev[category]?.[label], // Toggle checkbox
      },
    }));
  };

  // Filter inventory dynamically when checkedOptions changes
  useEffect(() => {
    const filteredInventory = forFilteredInventory.filter((car) =>
      Object.entries(checkedOptions).every(([category, options]) => {
        const activeFilters = Object.keys(options).filter(
          (key) => options[key]
        );

        // Skip filtering for categories with no active filters
        if (activeFilters.length === 0) return true;

        // Ensure the car matches at least one active filter in this category
        return activeFilters.includes(car[category]);
      })
    );

    setInventory(filteredInventory); // Update the inventory with filtered results
  }, [checkedOptions, forFilteredInventory, setInventory]);

  useLayoutEffect(() => {
    const uniqueSegments = Array.from(
      new Set(forFilteredInventory.map((item) => item.segment))
    );
    const uniqueCarModels = Array.from(
      new Set(forFilteredInventory.map((item) => item.brand))
    );
    const uniqueFuelTypes = Array.from(
      new Set(forFilteredInventory.map((item) => item.fuelType))
    );
    const uniqueTransmissions = Array.from(
      new Set(forFilteredInventory.map((item) => item.transmission))
    );
    const uniqueLuggageOptions = Array.from(
      new Set(forFilteredInventory.map((item) => item.luggageCapacity))
    );
    const uniqueSeatingOptions = Array.from(
      new Set(forFilteredInventory.map((item) => item.seatingCapacity))
    );

    setFilteredData({
      segment: uniqueSegments,
      brand: uniqueCarModels,
      fuel: uniqueFuelTypes,
      transmission: uniqueTransmissions,
      luggage: uniqueLuggageOptions,
      seating: uniqueSeatingOptions,
    });
  }, [inventory]);

  console.log("filetredata", filterData.uniqueSegments);

  return (
    <div className="w-64 p-4 border-r">
      {Object.keys(filterData).map((category) => (
        <div className="mb-4" key={category}>
          {/* Section Header */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection(category)}
          >
            <h3 className="font-semibold text-sm capitalize">{category}</h3>
            {isSectionExpanded(category) ? (
              <ExpandLessIcon className="text-gray-600" />
            ) : (
              <ExpandMoreIcon className="text-gray-600" />
            )}
          </div>

          {/* Collapsible Options */}
          <Collapse
            in={isSectionExpanded(category)}
            timeout="auto"
            unmountOnExit
          >
            <div className="mt-2 space-y-1">
              {filterData[category]?.map((option, index) => (
                <div className="flex items-center  " key={index}>
                  <div className="flex items-center gap-2 text-gray-600">
                    <input
                      type="checkbox"
                      id={option}
                      checked={checkedOptions[category]?.[option] || false}
                      onChange={() => handleCheckboxChange(option, category)}
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>

                  <label className="text-sm flex-grow"></label>
                  <span className="text-gray-500 text-xs">4</span>
                </div>
              ))}
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default SidebarFilter;

export function SortComponent({ setIsGrid, isGrid }) {
  const { setInventory, inventory, forFilteredInventory } = useCarContext();

  const [sortOption, setSortOption] = useState("Recommended");
  const [searchQuery, setSearchQuery] = useState("");

  // console.log("sort change", sortOption);
  useEffect(() => {
    if (sortOption === "Price: Low to High") {
      setInventory((prevInventory) =>
        [...prevInventory].sort((a, b) => a.pricePerDay - b.pricePerDay)
      );
    } else if (sortOption === "Price: High to Low") {
      setInventory((prevInventory) =>
        [...prevInventory].sort((a, b) => b.pricePerDay - a.pricePerDay)
      );
    }
  }, [sortOption]);
  const handleSortChange = (event) => setSortOption(event.target.value);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    console.log("search query", searchQuery);

    const filteredCars = forFilteredInventory.filter((car) =>
      car.model.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setInventory(filteredCars);
  };

  return (
    <>
      {/* Search and Sort Section */}
      <div className="flex items-center justify-between mb-8">
        <input
          type="text"
          placeholder="Search cars..."
          onChange={handleSearchChange}
          className="border rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-none"
        />
        <div className="flex items-center justify-center">
          <div className="   text-amber-800 flex  items-center justify-center ">
            <button
              className={`${
                isGrid === "list"
                  ? "bg-red-600 text-white "
                  : "bg-white text-amber-800"
              } text-3xl p-1 bg-red-600 rounded-l-md`}
              onClick={() => setIsGrid("list")}
            >
              <ViewListIcon />
            </button>
            <button
              className={`${
                isGrid === "grid"
                  ? "bg-red-600 text-white "
                  : "bg-white text-amber-800"
              } text-3xl p-1 bg-red-600 rounded-r-md`}
              onClick={() => setIsGrid("grid")}
            >
              <GridViewIcon />
            </button>
          </div>
          <FormControl className="ml-4  min-w-[150px]">
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortOption}
              onChange={handleSortChange}
              className="bg-white mt-2 "
            >
              {" "}
              <MenuItem value="Recommended">Recommended</MenuItem>
              <MenuItem value="Price: Low to High">Price: Low to High</MenuItem>
              <MenuItem value="Price: High to Low">Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
}

export const FilterComponent = ({
  filter,
  count,
  handleCheckboxChange,
  checkedOptions,
}) => {
  return (
    <div className="flex items-center  ">
      <div className="flex items-center gap-2 text-gray-600">
        <input
          type="checkbox"
          id={filter}
          checked={!!checkedOptions[filter]}
          onChange={() => handleCheckboxChange(filter)}
        />
        <label htmlFor={filter}>{filter}</label>
      </div>

      <label className="text-sm flex-grow"></label>
      <span className="text-gray-500 text-xs">({count})</span>
    </div>
  );
};
