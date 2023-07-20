// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/Body/LandingPage";
import DisplayProperties from "./components/Body/DisplayProperties";
import About from "./components/Body/About";
import Contact from "./components/Body/Contact";
import HouseDetails from "./components/Body/HouseDetails";
import AddProperty from "./components/Body/AddProperty";
// import Layout from "./components/Layout";

function App() {

 

  const [rentals, setRentals] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRentals, setFilteredRentals] = useState("all");

  useEffect(() => {
    fetch("http://localhost:8001/rentals?q=" + search)
      .then((response) => response.json())
      .then((data) => setRentals(data));
  }, [search]);

  const category = rentals.filter((rental) => {
    if (filteredRentals === "all") {
      return true;
    } else {
      return rental.size === filteredRentals;
    }
  });

  const sortedRentals = [...category].sort((a, b) =>
    a.location > b.location ? 1 : -1
  );

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="app">
      <Navbar
        handleSearch={handleSearch}
        rentals={rentals}
        filteredRentals={filteredRentals}
        setFilteredRentals={setFilteredRentals}
      />
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route
          path="/"
          element={<LandingPage sortedRentals={sortedRentals} />}
        />
        <Route
          path="/add"
          element={<AddProperty rentals={rentals} setRentals={setRentals} />}
        />
        <Route path="/properties" element={<DisplayProperties />} />
        <Route exact path="/properties/:id" element={<HouseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />;
    </div>
  );
}

export default App;
