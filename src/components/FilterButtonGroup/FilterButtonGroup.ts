export interface FilterButtonGroupProps {
    filter: string;
    hoveredButton: string | null;
    onFilterChange: (filterType: string) => void;
    onMouseEnter: (id: string) => void;
    onMouseLeave: () => void;
  }