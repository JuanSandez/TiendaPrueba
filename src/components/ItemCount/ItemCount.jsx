import React, { useContext, useState } from "react";
import useCounter from "../../hook/useCounter";
import { Link } from "react-router-dom";


const ItemCount = ({ stock, initialValue, onAdd }) => {
  const { count, incrementar, decrementar } = useCounter(initialValue, stock);
  
//agregado
  const handleAdd = () => {
    onAdd(count);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-danger mx-2" onClick={decrementar}>
          -
        </button>
        <h2 className="mx-2">{count}</h2>
        <button className="btn btn-danger mx-2" onClick={incrementar}>
          +
        </button>
        <Link className="btn btn-danger" onClick={handleAdd}>Agregar al carrito</Link>
      </div>
    </div>
  );
};

export default ItemCount;
