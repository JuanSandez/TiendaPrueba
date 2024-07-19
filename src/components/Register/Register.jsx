import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { auth } from "../../config/firebase";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: nombre
      });
      alert("Usuario registrado con exito");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-md-6">
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
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
          onChange={(e)=> setNombre(e.target.value)}
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
          onChange={(e)=> setEmail(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
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
        Registrarse
      </button>
      {error && <p>{error}</p>}
    </form>
    </div>
    </div>
  );
};

export default Register;
