import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ nombre, descripcion, img, id, precio,stock }) => {

  const { addItem } = useContext(Context)
  const onAdd = (quantity) => {
    const item = {
      id, nombre, precio, stock
    }
    addItem(item, quantity)
    console.log(`agregaste ${quantity} unidades`)
  }


  return (
    <div className="container ">
      <div className="d-flex  justify-content-center">
        <div className="text-center">
          <h3>{nombre}</h3>
          <img src={img} alt="" />
          <p>{descripcion}</p>
          <ItemCount stock={5} initialValue={1} onAdd={onAdd} />
          <Link to='/cart' className="btn btn-success">Ir al carrito</Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
