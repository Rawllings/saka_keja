import React from "react";

function Navbar() {
  return (
    <div className=" ">
      <nav className="header navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1 className="navbar-brand brand logoo headwords ">
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
                <h2 className="nav-link  navlink headwords" aria-current="page">
                  Home
                </h2>
              </li>
              <li className="nav-item headwords">
                <h2 className="nav-link navlink headwords" aria-current="page">
                  About
                </h2>
              </li>
              <li className="nav-item headwords">
                <h2 className="nav-link  navlink" aria-current="page">
                  Contacts
                </h2>
              </li>
              {/* select  */}
              <select
                className="form-select dropdown"
                aria-label="Default select example"
              >
                <option className="dropdown" selected>
                  Select House
                </option>
                <option value="1">Single</option>
                <option value="1">Bedsitter</option>
                <option value="2">One Bedroom</option>
                <option value="3">Two Bedroom</option>
              </select>
            </ul>
            <form className="d-flex search" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-danger btnn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
