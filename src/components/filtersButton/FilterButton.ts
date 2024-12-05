export interface FilterButtonButton {
    style?: React.CSSProperties;
    label: string;
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }