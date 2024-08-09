import React from "react";
import { FilterButtonContainer, filtercontainer } from "../../Utils/GlobalStyles/FilterButton";
import { FilterButton } from "../../Components/ComponentIndex";
import { FilterButtonGroupProps } from "./FilterButtonGroup";
import { FILTER_TYPES } from "../../Utils/FilterButtonTypes/Index";


const FilterButtonGroup: React.FC<FilterButtonGroupProps> = ({
  filter,
  hoveredButton,
  onFilterChange,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div style={filtercontainer()} >
      {FILTER_TYPES.map((filterType) => (
        <FilterButton
          key={filterType}
          label={filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          style={FilterButtonContainer({
            isHovered: hoveredButton === filterType,
            isActive: filter === filterType,
          })}
          onMouseEnter={() => onMouseEnter(filterType)}
          onMouseLeave={onMouseLeave}
          onClick={() => onFilterChange(filterType)}
        />
      ))}
    </div>
  );
};

export default FilterButtonGroup;
