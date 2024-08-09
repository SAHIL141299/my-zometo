import { CSSProperties } from "react";

export const filtercontainer = (): CSSProperties => {
  return {
    flexShrink: "0",
    marginRight: "1.4rem",
    position: "relative",
    marginBottom: "1rem",
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    columnGap: "1rem",
  };
};

interface FilterButtonProps {
  isHovered: boolean;
  isActive: boolean;
}

export const FilterButtonContainer = ({
  isHovered,
  isActive
}: FilterButtonProps): React.CSSProperties => {
  return {
    border: isActive ? "2px solid rgb(255, 126, 139)" : "1px solid rgb(207, 207, 207)",
    color: isActive ? "white" : isHovered ? "white" : "rgb(156, 156, 156)",
    backgroundColor: isActive
      ? "rgb(255, 88, 100)"
      : isHovered
      ? "rgb(255, 126, 139)"
      : "rgb(255, 255, 255)",
    boxShadow: isActive
      ? "rgba(54, 54, 54, 0.1) 0px 3px 6px"
      : isHovered
      ? "none"
      : "rgba(54, 54, 54, 0.06) 0px 1px 2px",
    borderRadius: "0.3rem",
    padding: "0.3rem 0.3rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    height: "100%",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  };
};
