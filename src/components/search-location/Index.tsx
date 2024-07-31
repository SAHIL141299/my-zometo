import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { GeoAltFill, ChevronDown, Search } from 'react-bootstrap-icons';
import Location from '../common/location'; 
import SearchSuggestion from '../search-suggestion/index';
import './searchbar.css';

interface SearchBarProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

interface Suggestion {
  image?: string;
  title: string;
  description: string;
}

const SearchBar: FC<SearchBarProps> = ({ city, setCity }) => {
  const [showLocationCard, setShowLocationCard] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);
  const suggestionRef = useRef<HTMLDivElement>(null);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;

      // Check if click is outside the location card
      if (locationRef.current && !locationRef.current.contains(target)) {
        setShowLocationCard(false);
      }

      // Check if click is outside the suggestions
      if (suggestionRef.current && !suggestionRef.current.contains(target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleCityInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      // Fetch suggestions based on the input value
      fetchSuggestions(query);
    } else {
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };

  const fetchSuggestions = (query: string) => {
    // Replace this with your actual fetch call
    const fetchedSuggestions = [
      { title: 'Restaurant 1', description: 'Description 1' },
      { title: 'Restaurant 2', description: 'Description 2' },
      // Add more suggestions as needed
    ];
    setSuggestions(fetchedSuggestions);
    setShowSuggestions(true);
  };

  const toggleLocationCard = () => {
    setShowLocationCard((prev) => !prev);
  };

  return (
    <div className="searchbar-wrapper">
      <div className="searchlocation" onClick={toggleLocationCard} ref={locationRef}>
        <GeoAltFill className="location-icon" />
        <input
          placeholder="Search"
          className="searchinput"
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
      <div className="searchrestaurant">
        <Search className="search-icon" />
        <input
          placeholder="Search restaurant"
          className="restaurant-input no-focus-border"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        {showSuggestions && (
          <div ref={suggestionRef}>
            <SearchSuggestion suggestions={suggestions} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
