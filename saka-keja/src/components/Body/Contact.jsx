import React, { useState } from "react";

function Contact() {
  const [clients, setClients] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(0);
  const [description, setDescription] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    setClients([...clients, { email, password, phone, description }]);
    setEmail("");
    setPassword("");
    setPhone(0);
    setDescription("");

    fetch("http://localhost:8001/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        phone,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <section className="row">
      <h1 className="contacthead">Contacts</h1>
      <h3>Enter your details</h3>
      <div className=" maincontact card px-1000">
        <form class="card-body card" onSubmit={handleAdd}>
          <div class="mb-3">
            <label class="form-label">Enter email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Enter phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <input type="submit" class="btn btn-success" value="Submit" />
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
