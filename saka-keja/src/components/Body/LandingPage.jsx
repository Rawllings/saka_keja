import React from "react";
import DisplayProperties from "./DisplayProperties";
import About from "./About";
import Contact from "./Contact";

function LandingPage({ sortedRentals }) {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide back imagediv"
        data-bs-ride="carousel"
        style={{
          backgroundImage: "src/images/key-2114455_1280 (1).jpg",
        }}
      ></div>
      <DisplayProperties sortedRentals={sortedRentals} />
      <About />
      <Contact />
    </>
  );
}

export default LandingPage;
