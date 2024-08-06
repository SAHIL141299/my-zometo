import React from "react";

interface FilterButtonButton {
  style?: React.CSSProperties;
  label: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

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
