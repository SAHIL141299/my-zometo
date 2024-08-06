import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./layout.css";

const Home = lazy(() => import("../pages/home/index"));
const SearchResult = lazy(() => import("../pages/searchResult/index"));
const RestaurantData = lazy(() => import("../pages/restaurantData/index"));

const Layout = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Suspense
        fallback={
          <div className="loader-wrapper">
            <span className="loader-line"></span>
            <span className="loader"></span>
          </div>
        }
      >
        {showContent ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/restaurant/:id" element={<RestaurantData />} />
          </Routes>
        ) : (
          <div className="loader-wrapper">
            <span className="loader-line"></span>
            <span className="loader"></span>
          </div>
        )}
      </Suspense>
    </Router>
  );
};

export default Layout;
