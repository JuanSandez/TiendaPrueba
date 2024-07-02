import React, { useState } from "react";
import "./Formulario.css";

export function Formulario({ setUser }) {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === "" || contraseña === "") {
      setError(true);
      return;
    }
    setError(false);
    setUser([nombre]); 
  };

  return (
    <section>
      <h1>Login</h1>
      
      <form className="formulario" onSubmit={handleSubmit}> 
        <input
          type="text"
          value={nombre}
          placeholder="Nombre"
          
          onChange={(event) => setNombre(event.target.value)}
        />
        <input
          type="password"
          value={contraseña}
          placeholder="Contraseña"
          onChange={(event) => setContraseña(event.target.value)}
        />
        <button className="btn btn-success formulario-btn">
          Iniciar sesión
        </button>
      </form>
      
      {error && <p>Todos los campos son obligatorios*</p>}
    </section>
  );
}

export default Formulario;
