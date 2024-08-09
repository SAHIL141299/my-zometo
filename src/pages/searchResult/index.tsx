import React, { useState } from "react";
import {
  FilterButtonContainer,
  filtercontainer,
} from "../../Utils/Styles/FlterButton";
import {
  Navbar,
  FilterButton,
  RestaurantCard,
} from "../../Components/ComponentIndex";

const SearchResult = () => {
  const [filter, setFilter] = useState<string>("all");
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => setHoveredButton(id);
  const handleMouseLeave = () => setHoveredButton(null);

  return (
    <>
      <Navbar />
      <div style={filtercontainer()}>
        {["all", "veg", "non-veg"].map((filterType) => (
          <FilterButton
            key={filterType}
            label={filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            style={FilterButtonContainer({
              isHovered: hoveredButton === filterType,
              isActive: filter === filterType,
            })}
            onMouseEnter={() => handleMouseEnter(filterType)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setFilter(filterType)}
          />
        ))}
      </div>
      <RestaurantCard filter={filter} />
    </>
  );
};

export default SearchResult;
