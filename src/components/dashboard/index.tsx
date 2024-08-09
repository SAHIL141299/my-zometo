import React, { useState } from "react";
import zometoimage from "../../Assets/Images/zometoimage.avif";
import "./Dashboard.css";
import { SearchBar } from "../ComponentIndex";

const Deshboard: React.FC = () => {
  const [city, setCity] = useState<string>(" ");

  return (
    <>
      <header className="navbar-header">
        <nav className="navbar">
          <img src={zometoimage} alt="zometo" className="navbar-img" />
          <div className="searchContainer">
            <SearchBar city={city} setCity={setCity} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Deshboard;
