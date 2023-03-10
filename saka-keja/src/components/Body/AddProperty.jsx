import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddProperty({ rentals, setRentals }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState(0);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setRentals([
      ...rentals,
      { name, image, size, price, location, phone, description },
    ]);
    setName("");
    setImage("");
    setSize("");
    setPrice(0);
    setLocation("");
    setPhone(0);
    setDescription("");

    fetch(" http://localhost:8001/rentals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image,
        size,
        price,
        location,
        phone,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <h1 className="text-center text-success py-5">Add Property</h1>

      <form class="card-body container" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Enter name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Image url</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Enter size</label>
          <input
            value={size}
            onChange={(e) => setSize(e.target.value)}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Enter price
          </label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Location
          </label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Phone
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
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

        <Link to="/">
          <button className="btn btn-success bttn">Back</button>
        </Link>
      </form>
    </div>
  );
}

export default AddProperty;
