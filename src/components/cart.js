import React from 'react';

export default function Cart(props) {

    
  return (
    <div className="container">
      <div className="d-flex">
        <div className="card h-100 " style={{ width: "15rem",marginTop:"30%",padding:"10px"}}>
          <img className="card-img-top" src={props.imageSrc} alt="Card image cap" />
          <div className="card-body d-flex flex-column justify-content-between">
            
            <a href="#" style={{ textDecoration: "none",color:"black" }}>
              <h5 className="card-title text-center" style={{  }}>{props.name}</h5>
            </a>
          </div>
        </div>

        {/* Add more cards here, if needed */}
      </div>
    </div>
  );
}
