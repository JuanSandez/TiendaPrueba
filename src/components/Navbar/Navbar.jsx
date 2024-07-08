import React, { useEffect, useState } from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getProductos, productos } from "../../data/asyncMock";

const Navbar = () => {
  const [busqueda, setBusqueda] = useState(""); //Almacena el término de búsqueda que el usuario ingresa.
  const [filtroResultado, setFiltroResultado] = useState([]); //Almacena los resultados filtrados basados en el término de búsqueda.
  const [data, setData] = useState({ data: [] }); //Almacena los datos que se obtienen de una API, en este caso, una lista de ropa.

  const location = useLocation(); //Sirve para obtener la ubicación actual del navegador

  useEffect(() => {
    //1)Se llama getProductos para obtener datos, y luego se actualiza el estado data con estos datos:
    getProductos().then((data) => setData(data));
  }, []);

  //Si setBusqueda esta vacio, se limpia el filtro del resultado
  useEffect(() => {
    if (busqueda === "") {
      setFiltroResultado([]);
    }
  }, [busqueda]);

  // Cada vez que cambias de ubicación en la web, se limpia filteredResults y searchTerm.
  useEffect(() => {
    setFiltroResultado([]); // Limpia los resultados filtrados.
    setBusqueda(""); //Limpia el resultado de la búsqueda
  }, [location]); //Cada vez que cambia, este efecto se ejecuta.

  const handleSearch = (e) => {
    e.preventDefault(); //Previene el comportamiento por defecto del formulario (generalmente, recargar la página).

    //Filtra los productos cuyo nombre incluye el término de búsqueda (ignorando mayúsculas y minúsculas).
    const filtroProductos = data.filter((producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    // Actualiza setFiltroResultado con los productos filtrados.
    setFiltroResultado([...filtroProductos]);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to={"/"}
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#" to={"/login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to='/categoria/Remera'>
                      Remeras
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/categoria/Jeans'>
                      Jeans
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/categoria/Camperas'>
                      Camperas
                    </Link>
                  </li>
                  
                </ul>
              </li>
              
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <Link to="/cart">
              <CartWidget />
            </Link>
          </div>
        </div>
      </nav>

      {filtroResultado.length > 0 && (
        <div className="search-results">
          {filtroResultado.map((result, index) => (
            <div key={index}>
              <Link
                to={`/${result.nombre ? "producto" : "categoria"}/${result.id}`}
              >
                <h4>{result.nombre}</h4>
              </Link>
              {result.img && (
                <img
                  src={result.img}
                  alt={result.nombre}
                  style={{ width: "100px", height: "auto" }}
                />
              )}
            </div>
          ))}
        </div>
      )}
      
    </>
  );
};

export default Navbar;
