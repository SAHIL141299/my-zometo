import React from 'react';
import { Crosshair } from 'react-bootstrap-icons';

interface LocationProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const Location: React.FC<LocationProps> = ({ setCity }) => {
  const handleLocationClick = () => {
    setCity('Ahmedabad'); // Example, replace with actual logic
  };

  return (
    <div className="location-card" onClick={handleLocationClick}>
      <div className="current-locationicon">
        <Crosshair className="current-location" />
      </div>
      <div>
        <p className="Detect-current-location">Detect current location </p>
        <p className="Using-GPS">Using GPS</p>
      </div>
    </div>
  );
};

export default Location;
