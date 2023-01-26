import React from "react";
import { Link } from "react-router-dom";

function DisplayProperties({ sortedRentals }) {
  // Array.isArray(users)
  //   ? users.map(user => (
  //       <div key={user.id.value}>
  //         <h2>
  //           Name: {user.name.first} {user.name.last}
  //         </h2>
  //       </div>
  //     ))
  //   : null

  // {Array.isArray(obj)
  //   ? obj.map(element => {
  //       return <h2>{element}</h2>;
  //     })
  //   : null}
  return (
    <>
      <div className="row " style={{ gap: "3%" }}>
        <h1 className="contacthead">Properties</h1>
        {Array.isArray(sortedRentals)
          ? sortedRentals.map((rental, index) => {
              return (
                <div className="col-2 mb-4 ">
                  <div
                    key={index}
                    className="row no-gutters"
                    style={{ width: "18rem;" }}
                  >
                    <div className="row ">
                      <div className="card p-0 m-1 border border-success shadow p-3 mb-5 bg-body rounded">
                        <div className="col md-3">
                          <img
                            src={rental.image}
                            className="card-img-top"
                            alt="..."
                          />
                        </div>

                        <div className="card-body">
                          <h5 className="card-text-sm">
                            Size:
                            <span className="text-success"> {rental.size}</span>
                          </h5>

                          <h5 className="card-text-sm">
                            Price:
                            <span className="text-success">
                              {" "}
                              {rental.price}
                            </span>
                          </h5>
                          <h5 className="card-text-sm">
                            Location:
                            <span className="text-success">
                              {" "}
                              {rental.location}
                            </span>
                          </h5>
                        </div>
                        <Link to={`/properties/${rental.id}`}>
                          <button className="btn btn-success">Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export default DisplayProperties;
