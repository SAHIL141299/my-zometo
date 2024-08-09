import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Layout.css";

const Home = lazy(() => import("../Pages/Home/Index"));
const SearchResult = lazy(() => import("../Pages/SearchResult/Index"));
const RestaurantData = lazy(() => import("../Pages/RestaurantData/Index"));

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
