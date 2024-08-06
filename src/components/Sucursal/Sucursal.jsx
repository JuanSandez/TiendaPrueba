import React from "react";
import sucursal from "../../assets/sucursal.jpg";
import "./Sucursal.css";

const Sucursal = () => {
  return (
    <div className="container-sucursal">
      <div className="container-sucursal-img">
        <img src={sucursal} alt="" />
      </div>
      <div className="container-sucursal-text">
        <h2>Puntos de venta</h2>
        <span className="material-symbols-outlined map">pin_drop</span><p>Pacífico Rodríguez 6154 - Ballester</p>
        <p>Pacífico Rodríguez 6154 - Ballester</p>
        <p>Pacífico Rodríguez 6154 - Ballester</p>
        
      </div>
    </div>
  );
};

export default Sucursal;
