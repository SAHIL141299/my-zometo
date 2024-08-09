import React, { useState } from "react";
import { FilterButtonGroup, Navbar, RestaurantCard } from "../../Components/ComponentIndex";

const SearchResult = () => {
  const [filter, setFilter] = useState<string>("all");
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => setHoveredButton(id);
  const handleMouseLeave = () => setHoveredButton(null);

  return (
    <>
      <Navbar />
      <FilterButtonGroup
        filter={filter}
        hoveredButton={hoveredButton}
        onFilterChange={setFilter}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <RestaurantCard filter={filter} />
    </>
  );
};

export default SearchResult;
