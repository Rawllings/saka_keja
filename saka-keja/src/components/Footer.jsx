import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div class="carousel-inner">
        <h1 className="navbar-brand brand logoo ">
          Saka-<span className="keja">keja</span>
        </h1>
      </div>
      <div className="footercontacts">
        <h5>+254727371100</h5>
        <br />
        <h5>sakakeja@gmail.com</h5>
        <br />
        <h5>Nairobi, Kenya</h5>
      </div>
      <div className="rights">
        <p>Copyright ©2022 All rights reserved</p>
      </div>
      <p className="landingWords py-0">
        {" "}
        Your next dream house is just one button away...
      </p>
    </footer>
  );
}

export default Footer;
