import React from "react";
import { useSelector } from "react-redux";
import { suggestionCard } from "../../Utils/GlobalStyles/SearchSuggestions";
import { SuggestionCards } from '../ComponentIndex'
import { SearchSuggestionProps, suggestion } from './SearchSuggestion';



const SearchSuggestion: React.FC<SearchSuggestionProps> = ({ suggestionsData }) => {
  const suggestions = useSelector(
    (state: { search: { data: suggestion[] } }) => state.search.data
  );

  return (
    <div
      style={suggestionCard()}
    >
      {suggestions.map((suggestion) => (
        <SuggestionCards
          key={suggestion.id}
          id={suggestion.id.toString()}
          image={suggestion.image}
          title={suggestion.restaurantName}
          description={suggestion.rating?.toString() || "No rating"}
          categories={suggestion.categories}
          foodType={suggestion.foodType}
          linkTo="/search"
        />
      ))}
    </div>
  );
};

export default SearchSuggestion;
