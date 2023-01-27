import React, { useState } from "react";

function Contact() {
  const [clients, setClients] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(0);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setClients(...clients, { email, password, phone, description });
  }

  return (
    <section className="row">
      <h1 className="contacthead">Contacts</h1>
      <div className=" maincontact ">
        <form className=" card contact col-sm-6 ">
          <h3>Enter your details</h3>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
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
        </form>

        {/* our contacts  */}
        <div className=" card ourcontact  col-sm-6 ">
          <div className="contact ">
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
