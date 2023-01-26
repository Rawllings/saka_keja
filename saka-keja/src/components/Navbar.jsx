import React from "react";
import { Link } from "react-router-dom";

function Navbar({ handleSearch, setFilteredRentals, filteredRentals }) {
  function filterSizeHouse(e) {
    setFilteredRentals(e.target.value);
  }

  return (
    <div>
      <nav className="header navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1 className="logoo ">
            Saka-<span className="keja">keja</span>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 headwords">
              <li className="nav-item headwords">
                <Link className="nav-link" to="/">
                  <h2
                    className="nav-link  navlink headwords"
                    aria-current="page"
                  >
                    Home
                  </h2>
                </Link>
              </li>
              <li className="nav-item headwords">
                <Link className="nav-link" to="about">
                  <h2
                    className="nav-link navlink headwords"
                    aria-current="page"
                  >
                    About
                  </h2>
                </Link>
              </li>
              <li className="nav-item headwords">
                <Link className="nav-link" to="contact">
                  <h2 className="nav-link  navlink" aria-current="page">
                    Contacts
                  </h2>
                </Link>
              </li>
              {/* select  */}
              <select
                value={filteredRentals}
                className="form-select dropdown"
                aria-label="Default select example"
                onChange={filterSizeHouse}
                defaultValue={"all"}
              >
                <option className="dropdown" selected>
                  All
                </option>
                <option value="Single">Single</option>
                <option value="Bedsitter">Bedsitter</option>
                <option value="One bedroom">One Bedroom</option>
                <option value="Two bedroom">Two Bedroom</option>
              </select>
            </ul>
            <form className="d-flex search" role="search">
              <input
                onChange={handleSearch}
                class="form-control me-2"
                type="text"
                name="location"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
