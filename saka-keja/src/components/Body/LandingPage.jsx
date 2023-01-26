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
          opacity: "100pc",
        }}
      >
        {" "}
        <div className="text-center position-absolute top-50 start-50">
          <h1 className="landingText">
            Saka-<span className="keja">Keja</span>
          </h1>
          <p>
            <small className="landingWords py-0px">
              Your next dream house is just one button away...
            </small>
          </p>
        </div>
      </div>
      <DisplayProperties sortedRentals={sortedRentals} />
      <About />
      <Contact />
    </>
  );
}

export default LandingPage;
