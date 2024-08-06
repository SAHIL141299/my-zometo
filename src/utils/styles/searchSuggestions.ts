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
    width:"150px",
    height: "150px"
  }
}