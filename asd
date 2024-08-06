import {
  addDoc,
  collection,
  doc,
  getDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { db } from "../../config/firebase";
import Context from "../../context/CartContext";
import { Toast } from "bootstrap";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    repeatedEmail: "",
    phone: "",
  });

  const [emailMatch, setEmailMatch] = useState(true);
  const [error, setError] = useState({});
  const { cart, getTotal } = useContext(Context);
    console.log(cart)
  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const validateEmails = () => {
    if (user.email === user.repeatedEmail) {
      setEmailMatch(true);
    } else {
      setEmailMatch(false);
    }
  };
  //Hacer esto por cada campo de validacion
  const validateForm = () => {
    const errors = {}
    if (!user.name) {
      errors.name = "tenes que agregar un nombre"
    }
    setError(errors)
    return Object.keys(errors).length === 0;
  }

  //Generar orden
  const getOrder = async () => {
    const isFormValid = validateForm();
    validateEmails();

    
    if (isFormValid && emailMatch) {
      const ordersCollection = collection(db, "orders");

      //Actualizacion de stock
      try {
        for (const item of cart) {
          const productRef = doc(db, "productos", item.id);
          const productDoc = await getDoc(productRef);

          const currentStock = productDoc.data().stock;

          if (currentStock >= item.quantity) {
            await updateDoc(productRef, {
              stock: currentStock - item.quantity,
            });
          } else {
            console.log(`No hay suficient stock para ${item.name}`);
          }
        
        //Generar orden
        const order = {
          buyer: user,
          cart: cart,
          total: getTotal(),
          // fechaDeCompra: Timestamp()
        };
        //subir a la db se sube con addDoc
        const orderDocRef = await addDoc(ordersCollection, order);
        console.log(orderDocRef.id);
    }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className="d-flex flex-column align-items-center">
      <h2>Datos de facturacion</h2>
      <div className="form-group w-50">
        <label htmlFor="exampleInputName1">Nombre:</label>
        <input
          name="name"
          type="text"
          className="form-control form-control-sm"
          id="exampleInputName1"
          aria-describedby="nameHelp"
          placeholder="Ingrese el nombre"
          onChange={updateUser}
        />
      </div>

      <div className="form-group w-50">
        <label htmlFor="exampleInputEmail1">Email:</label>
        <input
          type="email"
          className="form-control form-control-sm"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          placeholder="Ingrese el email"
          onChange={updateUser}
        />
      </div>

      <div className="form-group w-50">
        <label htmlFor="exampleInputEmail2">Repetir Email:</label>
        <input
          type="email"
          className="form-control form-control-sm"
          id="exampleInputEmail2"
          aria-describedby="emailHelp"
          name="confirmEmail"
          placeholder="Confirme su email"
          onChange={updateUser}
        />
      </div>

      <div className="form-group w-50">
        <label htmlFor="exampleInputPhone1">Telefono:</label>
        <input
          type="text"
          name="phone"
          className="form-control form-control-sm"
          id="exampleInputPhone1"
          placeholder="Ingrese su telefono"
          onChange={updateUser}
        />
      </div>

      <button onClick={getOrder} type="submit" className="btn btn-success">
        Finalizar compra
      </button>
    </form>
  );
};

export default Checkout;