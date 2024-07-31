import React, { useState } from 'react';
import dashboardBackgroud from '../../assets/images/deshboarBackground.avif';
import ZometoText from '../../assets/images/Zometologo.avif';
import './home.css';
import SearchBar from '../../components/search-location/Index'; // Adjust the path as needed

const Index: React.FC = () => {
  const [city, setCity] = useState<string>('');

  return (
    <div>
      <img
        src={dashboardBackgroud}
        className="high-res-image"
        alt="Dashboard Background"
        role="presentation"
      />
      <div className="content-wrapper">
        <div>
          <img src={ZometoText} alt="Zometo Logo" className="Zometo" />
        </div>
        <div className="sloggen">
          <h1>Discover the best food & drinks in {city}</h1>
        </div>
        <div className="searchContainer">
          <SearchBar city={city} setCity={setCity} />
        </div>
      </div>
    </div>
  );
};

export default Index;
