import React from "react";
import { Link } from "react-router-dom";


const Item = ({ nombre, img,id }) => {
  return (
    
        <div className="card" style={{ width: 18 + "rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p>$20.000</p>
            <Link to={`/producto/${id}`} className="btn btn-primary">
              Ver detalle
            </Link>
            
              
          </div>
        </div>
        



  );
};

export default Item;
