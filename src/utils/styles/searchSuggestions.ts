import { CSSProperties } from "react";

export const SuggestionCardContainer = (): CSSProperties => {
  return {
    display: "flex",
    position: "relative",
    background: "rgb(255, 255, 255)",
    padding: "1.5rem 1.2rem",
    boxShadow: "none",
    filter: "none",
    top: "0",
    right: "0",
    width: "34.2rem",
    borderRadius: "0.8rem",
  };
};

export const Dish = (): CSSProperties => {
  return {
    maxWidth: "100%",
    width: "7.2rem",
    height: "7.2rem",
    overflow: "hidden",
    position: "absolute",
  };
};
export const Details = (): CSSProperties => {
  return {
    borderRadius: "0.8rem",
    flexShrink: "0",
    cursor: "pointer",
  };
};

export const DishItems = (): CSSProperties => {
  return {
    objectFit: "cover",
    transform: "none",
    opacity: "1",
    willChange: "transform, opacity",
    borderRadius: "inherit",
    filter: "unset",
    transition: "opacity 0.25s, transform 0.25s",
    width: "100%",
    height: "100%",
  };
};

export const DishName = (): CSSProperties => {
  return {
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "8.5rem",
    width: "100%",
    flexShrink: "1",
    paddingTop: "0.5rem",
  };
};

export const DishTitleName = (): CSSProperties => {
  return {
    lineHeight: "1.5",
    margin: "12px",
    color: "rgb(54, 54, 54)",
    fontSize: "1.3rem",
    fontWeight: "500",
    textAlign: "left",
  };
};

export const DishSuggestion = (): CSSProperties => {
  return {
    fontSize: "1.4rem",
    lineHeight: "1.5",
    marginLeft: "12px",
    color: "rgb(79, 79, 79)",
    textAlign: "left",
  };
};

export const suggestionCard = (): CSSProperties => {
  return{
    width: "550px",
    height: "400px",
    overflowY: "auto",
    backgroundColor: "white",
    position: "absolute",
    right: "0",
    top: "3.4rem",
  };
};

export const suggestionCardImage = (): CSSProperties => {
  return{
    width:"100px",
    height: "100px"
  }
}