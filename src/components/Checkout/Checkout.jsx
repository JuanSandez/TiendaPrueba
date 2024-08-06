import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { db } from "../../config/firebase";
import Context from "../../context/CartContext";

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
    const errors = {};
    if (!user.name) {
      errors.name = "Tienes que agregar un nombre";
    }
    if (!user.email) {
      errors.email = "Tienes que agregar un email";
    }
    if (!user.repeatedEmail) {
      errors.repeatedEmail = "Tienes que repetir el email";
    }
    if (!user.phone) {
      errors.phone = "Tienes que agregar un teléfono";
    }
    validateEmails();
    if (!emailMatch) {
      errors.repeatedEmail = "Los emails no coinciden";
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  //Generar orden
  const getOrder = async (event) => {
    event.preventDefault();
    const isFormValid = validateForm();
    console.log(emailMatch);
    console.log(isFormValid);
    if (isFormValid && emailMatch) {
      const ordersCollection = collection(db, 'orders');
    //Actualizacion de stock
      try {
        for (const item of cart) {
          const productRef = doc(db, 'productos', item.id);
          const productDoc = await getDoc(productRef);

          const currentStock = productDoc.data().stock;

          if (currentStock >= item.quantity) {
            await updateDoc(productRef, {
              stock: currentStock - item.quantity,
            });
          } else {
            console.log(`No hay suficiente stock para ${item.name}`);
          }
        }
        //Generar orden
        const order = {
          buyer: user,
          cart: cart,
          total: getTotal(),
          
        };
        //subir a la db se sube con addDoc
        const orderDocRef = await addDoc(ordersCollection, order);
        console.log('ID de la orden:', orderDocRef.id);
      } catch (error) {
        console.log('Error al generar la orden:', error);
      }
    }
  };

  return (
    <form className="d-flex flex-column align-items-center" onSubmit={getOrder}>
      <h2>Datos de facturación</h2>
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
        {error.name && <div className="text-danger">{error.name}</div>}
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
        {error.email && <div className="text-danger">{error.email}</div>}
      </div>

      <div className="form-group w-50">
        <label htmlFor="exampleInputEmail2">Repetir Email:</label>
        <input
          type="email"
          className="form-control form-control-sm"
          id="exampleInputEmail2"
          aria-describedby="emailHelp"
          name="repeatedEmail"
          placeholder="Confirme su email"
          onChange={updateUser}
        />
        {error.repeatedEmail && <div className="text-danger">{error.repeatedEmail}</div>}
      </div>

      <div className="form-group w-50">
        <label htmlFor="exampleInputPhone1">Teléfono:</label>
        <input
          type="text"
          name="phone"
          className="form-control form-control-sm"
          id="exampleInputPhone1"
          placeholder="Ingrese su teléfono"
          onChange={updateUser}
        />
        {error.phone && <div className="text-danger">{error.phone}</div>}
      </div>

      <button type="submit" className="btn btn-success">
        Finalizar compra
      </button>
    </form>
  );
};

export default Checkout;
