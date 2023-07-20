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
    <div className="card" style={{paddingLeft:"100px"}}>
      <div className="row container-flex " style={{ gap: "3%" }}>
        <h1 className="contacthead">Properties</h1>
       
                <div className="col-2 mb-4 ">

                  <div
                    
                    className="row no-gutters"
                    style={{ width: "18rem;" }}
                  >
                    <div className="row ">
                      <div className="card border border-success shadow bg-body rounded">
                        <div className="col md-3">
                          <img
                            src="https://cdn.pixabay.com/photo/2018/02/10/15/12/architecture-3143801_1280.jpg"
                            className="card-img-top"
                            alt="..."
                          />
                        </div>

                        <div className="card-body">
                          <h5 className="card-text-sm">
                            Size:
                            <span className="text-success">Bedsitter </span>
                          </h5>

                          <h5 className="card-text-sm">
                            Price:
                            <span className="text-success">
                            5,000
                            </span>
                          </h5>
                          <h5 className="card-text-sm">
                            Location: Ruai
                            <span className="text-success">
                            
                            </span>
                          </h5>
                        </div>
                        <Link to="">
                          <button className="btn btn-success" style={{marginBottom:"20px"}}>Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>





                <div className="col-2 mb-4 ">
                  <div
                    className="row no-gutters"
                    style={{ width: "18rem;" }}
                  >
                    <div className="row ">
                      <div className="card border border-success shadow bg-body rounded">
                        <div className="col md-3">
                          <img
                            src="https://cdn.pixabay.com/photo/2019/03/26/09/56/prefab-4082213_1280.jpg"
                            className="card-img-top"
                            alt="..."
                          />
                        </div>

                        <div className="card-body">
                          <h5 className="card-text-sm">
                            Size:
                            <span className="text-success">Single </span>
                          </h5>

                          <h5 className="card-text-sm">
                            Price:
                            <span className="text-success">
                            3,500
                            </span>
                          </h5>
                          <h5 className="card-text-sm">
                            Location: Thika
                            <span className="text-success">
                            
                            </span>
                          </h5>
                        </div>
                        <Link to="">
                          <button style={{marginBottom:"20px"}} className="btn btn-success">Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="col-2 mb-4 ">
                  <div
                    className="row no-gutters"
                    style={{ width: "18rem;" }}
                  >
                    <div className="row ">
                      <div className="card border border-success shadow bg-body rounded">
                        <div className="col md-3">
                          <img
                            src="https://cdn.pixabay.com/photo/2018/04/07/03/06/real-estate-3297625_1280.jpg"
                            className="card-img-top"
                            alt="..."
                          />
                        </div>

                        <div className="card-body">
                          <h5 className="card-text-sm">
                            Size:
                            <span className="text-success">Two bedroom </span>
                          </h5>

                          <h5 className="card-text-sm">
                            Price:
                            <span className="text-success">
                            20,000
                            </span>
                          </h5>
                          <h5 className="card-text-sm">
                            Location: Westlands
                            <span className="text-success">
                            
                            </span>
                          </h5>
                        </div>
                        <Link to="">
                          <button style={{marginBottom:"20px"}} className="btn btn-success">Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>




                <div className="col-2 mb-4 ">
                  <div
                    className="row no-gutters"
                    style={{ width: "18rem;" }}
                  >
                    <div className="row ">
                      <div className="card border border-success shadow bg-body rounded">
                        <div className="col md-3">
                          <img
                            src="https://cdn.pixabay.com/photo/2017/03/13/07/17/apartment-2138949_1280.jpg"
                            className="card-img-top"
                            alt="..."
                          />
                        </div>

                        <div className="card-body">
                          <h5 className="card-text-sm">
                            Size:
                            <span className="text-success">One bedroom </span>
                          </h5>

                          <h5 className="card-text-sm">
                            Price:
                            <span className="text-success">
                            10,000
                            </span>
                          </h5>
                          <h5 className="card-text-sm">
                            Location: Sukari
                            <span className="text-success">
                            
                            </span>
                          </h5>
                        </div>
                        <Link to="">
                          <button style={{marginBottom:"20px"}} className="btn btn-success">Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="col-2 mb-4 ">
                  <div
                    className="row no-gutters"
                    style={{ width: "18rem;" }}
                  >
                    <div className="row " >
                      <div className="card border border-success shadow bg-body rounded">
                        <div className="col md-3">
                          <img
                          style={{ marginTop: "20px;" }}
                            src="https://cdn.pixabay.com/photo/2015/08/09/20/44/tenement-house-882149_1280.jpg"
                            className="card-img-top"
                            alt="..."
                          />
                        </div>

                        <div className="card-body">
                          <h5 className="card-text-sm">
                            Size:
                            <span className="text-success">One bedroom </span>
                          </h5>

                          <h5 className="card-text-sm">
                            Price:
                            <span className="text-success">
                            15,000
                            </span>
                          </h5>
                          <h5 className="card-text-sm">
                            Location: Umoja
                            <span className="text-success">
                            
                            </span>
                          </h5>
                        </div>
                        <Link to="">
                          <button style={{marginBottom:"20px"}} className="btn btn-success">Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="col-2 mb-4 ">
                  <div
                    className="row no-gutters"
                    style={{ width: "18rem;" }}
                  >
                    <div className="row " >
                      <div className="card border border-success shadow bg-body rounded">
                        <div className="col md-3">
                          <img
                          style={{ marginTop: "20px;" }}
                            src="https://cdn.pixabay.com/photo/2019/12/20/17/27/south-houston-4708889_1280.jpg"
                            className="card-img-top"
                            alt="..."
                          />
                        </div>

                        <div className="card-body">
                          <h5 className="card-text-sm">
                            Size:
                            <span className="text-success">Bedsitter </span>
                          </h5>

                          <h5 className="card-text-sm">
                            Price:
                            <span className="text-success">
                            5,000
                            </span>
                          </h5>
                          <h5 className="card-text-sm">
                            Location: Umoja 1
                            <span className="text-success">
                            
                            </span>
                          </h5>
                        </div>
                        <Link to="">
                          <button style={{marginBottom:"20px"}} className="btn btn-success">Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-2 mb-4 ">
                  <div
                    className="row no-gutters"
                    style={{ width: "18rem;" }}
                  >
                    <div className="row " >
                      <div className="card border border-success shadow bg-body rounded">
                        <div className="col md-3">
                          <img
                          style={{ marginTop: "20px;" }}
                            src="https://cdn.pixabay.com/photo/2017/10/06/04/33/new-housing-development-2821968_1280.jpg"
                            className="card-img-top"
                            alt="..."
                          />
                        </div>

                        <div className="card-body">
                          <h5 className="card-text-sm">
                            Size:
                            <span className="text-success"> One bedroom </span>
                          </h5>

                          <h5 className="card-text-sm">
                            Price:
                            <span className="text-success">
                             15,000
                            </span>
                          </h5>
                          <h5 className="card-text-sm">
                            Location: Kikuyu
                            <span className="text-success">
                            
                            </span>
                          </h5>
                        </div>
                        <Link to="">
                          <button style={{marginBottom:"20px"}} className="btn btn-success">Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="col-2 mb-4 ">
                  <div
                    className="row no-gutters"
                    style={{ width: "18rem;" }}
                  >
                    <div className="row " >
                      <div className="card border border-success shadow bg-body rounded">
                        <div className="col md-3">
                          <img
                          style={{ marginTop: "20px;" }}
                            src="https://cdn.pixabay.com/photo/2017/03/13/07/13/residential-area-2138933_1280.jpg"
                            className="card-img-top"
                            alt="..."
                          />
                        </div>

                        <div className="card-body">
                          <h5 className="card-text-sm">
                            Size:
                            <span className="text-success"> One bedroom </span>
                          </h5>
                          <h5 className="card-text-sm">
                            Price:
                            <span className="text-success">
                             12,000
                            </span>
                          </h5>
                          <h5 className="card-text-sm">
                            Location: Kayole
                            <span className="text-success">
                            
                            </span>
                          </h5>
                        </div>
                        <Link to="">
                          <button style={{marginBottom:"20px"}} className="btn btn-success">Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-2 mb-4 ">
                  <div
                    className="row no-gutters"
                    style={{ width: "18rem;" }}
                  >
                    <div className="row " >
                      <div className="card border border-success shadow bg-body rounded">
                        <div className="col md-3">
                          <img
                          style={{ marginTop: "20px;" }}
                            src="https://cdn.pixabay.com/photo/2020/11/17/10/32/japanese-5751965_1280.jpg"
                            className="card-img-top"
                            alt="..."
                          />
                        </div>

                        <div className="card-body">
                          <h5 className="card-text-sm">
                            Size:
                            <span className="text-success"> Single</span>
                          </h5>
                          <h5 className="card-text-sm">
                            Price:
                            <span className="text-success">
                             4,500
                            </span>
                          </h5>
                          <h5 className="card-text-sm">
                            Location: Githurai
                            <span className="text-success">
                            
                            </span>
                          </h5>
                        </div>
                        <Link to="">
                          <button style={{marginBottom:"20px"}} className="btn btn-success">Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-2 mb-4 ">
                  <div
                    className="row no-gutters"
                    style={{ width: "18rem;" }}
                  >
                    <div className="row " >
                      <div className="card border border-success shadow bg-body rounded">
                        <div className="col md-3">
                          <img
                          style={{ marginTop: "20px;" }}
                            src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg"
                            className="card-img-top"
                            alt="..."
                          />
                        </div>

                        <div className="card-body">
                          <h5 className="card-text-sm">
                            Size:
                            <span className="text-success"> Two bedroom</span>
                          </h5>
                          <h5 className="card-text-sm">
                            Price:
                            <span className="text-success">
                             25,500
                            </span>
                          </h5>
                          <h5 className="card-text-sm">
                            Location: Ruiru
                            <span className="text-success">
                            
                            </span>
                          </h5>
                        </div>
                        <Link to="">
                          <button style={{marginBottom:"20px"}} className="btn btn-success">Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            
      </div>
    </div>
  );
}

export default DisplayProperties;
