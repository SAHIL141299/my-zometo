import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { GeoAltFill, ChevronDown, Search } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { searchRequest } from "../../Redux/Actions/SearchActions";
import { Input, SearchSuggestion, Location } from "../ComponentIndex";
import { SearchBarProps } from "./FindLocation";
import "./SearchBar.css";



const SearchBar: FC<SearchBarProps> = ({ city, setCity }) => {
  const [showLocationCard, setShowLocationCard] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);
  const suggestionRef = useRef<HTMLDivElement>(null);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (locationRef.current && !locationRef.current.contains(target)) {
        setShowLocationCard(false);
      }

      if (suggestionRef.current && !suggestionRef.current.contains(target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleCityInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    dispatch(searchRequest(query));
    if (query.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };

  const toggleLocationCard = () => {
    setShowLocationCard((prev) => !prev);
  };

  return (
    <div className="searchbar-wrapper">
      <div
        className="search-location"
        onClick={toggleLocationCard}
        ref={locationRef}
      >
        <GeoAltFill className="location-icon" />
        <Input
          placeholder="Search"
          className="search-input"
          value={city}
          onChange={handleCityInputChange}
        />
        <ChevronDown className="dropdown-icon" />
      </div>
      {showLocationCard && (
        <div ref={locationRef}>
          <Location setCity={setCity} />
        </div>
      )}
      <div className="input-left-border"></div>
      <div className="search-restaurant">
        <Search className="search-icon" />
        <Input
          placeholder="Search restaurant"
          className="restaurant-input no-focus-border"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        {showSuggestions && (
          <div ref={suggestionRef}>
            <SearchSuggestion suggestionsData={suggestions} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
