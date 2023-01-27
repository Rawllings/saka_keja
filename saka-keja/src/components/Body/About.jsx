import React from "react";

function About() {
  return (
    <div className="card  ">
      <h1 className="aboutUs carousel-item active ">About Us</h1>
      <div className="aboutGrid grid">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide aboutGrid "
          data-bs-ride="carousel"
        >
          <div class="carousel-inner  ">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2015/01/06/08/05/home-589985_1280.jpg"
                alt="House"
                className="img-thumbnail border-0"
              />
            </div>
          </div>
          <h3 className="about">
            If you want a house to move into and you have no time to go and
            search for it, don't worry because Saka-keja is here and we got your
            back. With the
            <span className="team">“TEAM”</span> ready to assist you to get your
            dream house. Saka-Keja is a house hunt website that connects
            landlords and people searching for rental houses with just one
            browse.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
