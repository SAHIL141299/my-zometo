import React from "react";
import { useSelector } from "react-redux";
import { suggestionCard, suggestionCardImage } from "../../utils/styles/searchSuggestions";
import SuggestionCards from "../suggestionCard/index";

interface Suggestion {
  id: string;
  image: string;
  restaurantName: string;
  rating: string;
  style: React.CSSProperties;
  categories?: string[];
  foodType?: string;
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
        <SuggestionCards
          key={suggestion.id}
          id={suggestion.id}
          image={suggestion.image}
          title={suggestion.restaurantName}
          description={suggestion.rating}
          categories={suggestion.categories}
          foodType={suggestion.foodType}
          linkTo="/search"
        />
      ))}
    </div>
  );
};

export default SearchSuggestion;
