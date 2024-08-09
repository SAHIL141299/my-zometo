import React from "react";
import { FilterButtonButton } from "./FilterButton";

const FilterButton: React.FC<FilterButtonButton> = ({
  style,
  onClick,
  label,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {label}
    </div>
  );
};

export default FilterButton;
