import React, { useState } from "react";
import "./Formulario.css";
import Home from "../Home/Home";


const Formulario = ({ setUser }) => {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === "" || contraseña === "" || email === "") {
      setError(true);
      return;
    }
    setError(false);
    setUser([nombre]);
  };
  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Nombre:
        </label>
        <input
          
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div id="emailHelp" className="form-text">
          Nunca compartiremos su correo electrónico con nadie más.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Contraseña:
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={contraseña}
          onChange={(event) => setContraseña(event.target.value)}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
      {error && <p>Todos los campos son obligatorios*</p>}
    </form>
  );
};

export default Formulario;
