import React from "react";
import { useSelector } from "react-redux";
import CustomCard from "../customCard/index";
import { suggestionCard, suggestionCardImage } from "../../utils/styles/searchSuggestions";

interface Suggestion {
  id: string;
  image: string;
  restaurantName: string;
  rating: string;
  style: React.CSSProperties;
}

interface SearchSuggestionProps {
  suggestionsData: Suggestion[];
}

const SearchSuggestion: React.FC<SearchSuggestionProps> = ({ suggestionsData }) => {
  const suggestions = useSelector(
    (state: { search: { data: Suggestion[] } }) => state.search.data
  );

  return (
    <div
      style={suggestionCard()}
    >
      {suggestions.map((suggestion) => (
        <CustomCard
          key={suggestion.id}
          id={suggestion.id}
          image={suggestion.image}
          style={suggestionCardImage()}
          title={suggestion.restaurantName}
          description={suggestion.rating}
          linkTo="/search"
        />
      ))}
    </div>
  );
};

export default SearchSuggestion;
