import React from 'react';

export default function dmilogin(props) {
  return (
    <div>
      <div className="card mt-5">
        <div className="card-header">
          <h3 style={{ textAlign: "center" }}>{props.name}</h3>
        </div>
        <div className="card-body">
          <div className="row g-0">
            <div className="col-lg-4 d-flex">
              <div className="bg-primary p-4 text-white d-flex flex-column flex-fill">
                <h2>4-Column Section</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero nec libero rhoncus suscipit.
                </p>
              </div>
            </div>

            <div className="col-lg-8 d-flex">
              <div className="bg-secondary p-4 text-white d-flex flex-column flex-fill">
                <h4 style={{textAlign:"center"}} >Sign In</h4>
                <div className="row justify-content-center">
                  <div className="col">
                    <div className="card shadow">
                      <div className="card-body">
                          <div className="mb-3">
                            <input type="text" name="name" className="form-control" id="name" placeholder="John Doe" />
                          </div>
                        <div className="mb-3">
                          <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
