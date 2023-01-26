import React from "react";

function Contact() {
  return (
    <section className="card">
      <h1 className="contacthead">Contacts</h1>
      <div className=" maincontact">
        <div className=" card contact ">
          <h3>Enter your details</h3>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Phone number
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </div>

        {/* our contacts  */}
        <div className=" card ourcontact">
          <div className="contact">
            <h2>Our Contacts</h2>
            <p></p>

            <div className="mb-3">
              <h3>Mobile</h3>
              <h4>+254727371199</h4>
            </div>
            <div className="mb-3">
              <h3>Email</h3>
              <h4>saka.keja@gmail.com</h4>
            </div>
            <div className="mb-3">
              <h3>Address</h3>
              <h4>30100-Nakuru</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
