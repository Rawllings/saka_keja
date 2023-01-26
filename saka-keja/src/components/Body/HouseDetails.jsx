import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function HouseDetails() {
  const { id } = useParams();
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8001/rentals/${id}`)
      .then((response) => response.json())
      .then((data) => setRentals(data));
  }, [id]);

  return (
    <div>
      House {id}
      <div className="col-2 mb-4 ">
        <div className="row no-gutters" style={{ width: "18rem;" }}>
          <div className="row ">
            <div className="card p-0 m-1 border border-success shadow p-3 mb-5 bg-body rounded">
              <div className="col md-3">
                <img src={rentals.image} className="card-img-top" alt="..." />
              </div>

              <div className="card-body">
                <h5 className="card-text-sm">
                  Size:
                  <span className="text-success"> {rentals.size}</span>
                </h5>

                <h5 className="card-text-sm">
                  Price:
                  <span className="text-success"> {rentals.price}</span>
                </h5>
                <h5 className="card-text-sm">
                  Location:
                  <span className="text-success"> {rentals.location}</span>
                </h5>
              </div>

              <button className="btn btn-success">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseDetails;
