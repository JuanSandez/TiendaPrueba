import React  from "react";

const Home = ({ user, setUser }) => {
  

  const handleLogout = () => {
    setUser([]);
  };
  
  return (
    <div className="usuario">
      <h1>Bienvenido</h1>
      <h2>{user}</h2>
      <button className="btn btn-success formulario-btn" onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Home;
