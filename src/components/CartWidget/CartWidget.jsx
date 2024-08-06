import React, { useContext } from "react";
import Context from "../../context/CartContext";


const CartWidget = () => {
  const {getQuantity} = useContext(Context)
  return (
    <>
    <div>
      <span className="material-symbols-outlined carrito">shopping_cart</span>
    </div>
    <div >
      <p className="contador">{getQuantity()}</p>
    </div>
    </>
  );
};

export default CartWidget;
