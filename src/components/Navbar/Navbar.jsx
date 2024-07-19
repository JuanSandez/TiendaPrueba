import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getProductos, productos } from "../../data/asyncMock";
import Context from "../../context/CartContext";

const Navbar = () => {
  const [busqueda, setBusqueda] = useState("");
  const [filtroResultado, setFiltroResultado] = useState([]);
  const [data, setData] = useState({ data: [] });
  const { user } = useContext(Context);

  const location = useLocation();

  useEffect(() => {
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

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Productos
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/categoria/Remera">
                      Remeras
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/categoria/Jeans">
                      Jeans
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/categoria/Camperas">
                      Camperas
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span
                    className="material-symbols-outlined user"
                    style={{ lineHeight: "0.2", fontSize: "1.5rem" }}
                  >
                    person
                  </span>
                </NavLink>
                <ul className="dropdown-menu">
                  {user ? (
                    <>
                      <li className="nav-item">
                        <Link className="btn btn-light text-danger">
                          {user.displayName || "Usuario"}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="btn btn-danger" to={"/logout"}>
                          Salir
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          href="#"
                          to={"/login"}
                        >
                          Login
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          to={"/registro"}
                          aria-current="page"
                          href="#"
                        >
                          Registro
                        </Link>
                      </li>
                    </>
                  )}
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
