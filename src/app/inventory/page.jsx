import React from "react";

import HeroSection from "@/components/widgets/inventory/HeroSection";
import FilterComponent from "@/components/widgets/inventory/FilterComponent";
import InventoryList from "@/components/widgets/inventory/InventoryList";

const Page = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="flex p-4 space-x-4">
        <FilterComponent />
        <InventoryList />
      </div>
    </div>
  );
};

export default Page;
