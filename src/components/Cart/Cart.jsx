import React, { useContext } from "react";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, getTotal, removeItem, clearCart } = useContext(Context);
  console.log("cart", cart);

  if (cart.length === 0) {
    return (
      <div className="container ">
        <div className="d-flex  justify-content-center">
          <div className="text-center">
            <h3>Todavia no agregaste productos al carrito</h3>
            <Link to={"/"} className="btn btn-success">Ver productos</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Producto</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio:</th>
          <th scope="col">Subtotal</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((prod) => (
          <tr key={prod.id}>
            <td>{prod.nombre}</td>
            <td>{prod.quantity}</td>
            <td>{prod.precio}</td>
            <td>{prod.precio * prod.quantity}</td>
            <td>
              <button onClick={() => removeItem(prod.id)}>
                <span className="material-symbols-outlined delete">delete</span>
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <th scope="row">Total: ${getTotal()}</th>
          <th>
            <button onClick={() => clearCart()}>Vaciar carrito</button>
          </th>
          <th>Finalizar compra</th>
        </tr>
      </tbody>
    </table>
  );
};

export default Cart;
