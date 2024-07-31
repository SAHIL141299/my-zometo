import React from 'react';
import './searchsuggestion.css';
import PizzaImage from '../../assets/images/pizza-dish.avif';

interface Suggestion {
  image?: string;
  title: string;
  description: string;
}

interface SuggestionCardProps {
  image?: string;
  title: string;
  description: string;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ image, title, description }) => {
  return (
    <div className='suggestion-card suggestion-card-wide'>
      <div className='dish details'>
        <img src={image || PizzaImage} alt='dish' loading='lazy' className='dishitems' />
      </div>
      <div className='dishName'>
        <p className='Pizza-Delivery'>{title}</p>
        <p className='Dish'>{description}</p>
      </div>
    </div>
  );
};

interface SearchSuggestionProps {
  suggestions: Suggestion[];
}

const SearchSuggestion: React.FC<SearchSuggestionProps> = ({ suggestions }) => {
  return (
    <div>
      {suggestions.map((suggestion, index) => (
        <SuggestionCard 
          key={index} 
          image={suggestion.image} 
          title={suggestion.title} 
          description={suggestion.description} 
        />
      ))}
    </div>
  );
};

export default SearchSuggestion;
