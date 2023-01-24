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
                className="img-thumbnail"
              />
            </div>
          </div>
          <h3 className="about">
            If you want something with a little flavor, the Touraza template is
            a tasteful choice. With the{" "}
            <span className="team">“MEET THE TEAM”</span> section near the top,
            geometric designs, and striking typography, you'll be able to
            showcase the humans behind your brand.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
