import React, { useState } from "react";
import dashboardBackgroud from "../../Assets/Images/deshboarBackground.avif";
import ZometoText from "../../Assets/Images/Zometologo.avif";
import { SearchBar } from '../../Components/ComponentIndex'
import "./Home.css";

const Home: React.FC = () => {
  const [city, setCity] = useState<string>("");

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
          <img src={ZometoText} alt="Zometo Logo" className="Zometo" loading="lazy" />
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

export default Home;
