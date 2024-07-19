import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseRef from "./components/UseRef/UseRef";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import PageNotFound from "./components/PageNotFund/PageNotFund";
import { ContextProvider } from "./context/CartContext";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import ImagenCarousel from "./components/ImagenCarousel/ImagenCarousel";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "./components/Footer/Footer";
import Sucursal from "./components/Sucursal/Sucursal";

function App() {
  

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
        <Navbar />
            <ImagenCarousel/>
          <Routes>
            <Route path="/" element={<ItemListContainer title="Tienda" />} />
            <Route
              path="/categoria/:categoryId"
              element={<ItemListContainer title="Tienda" />}
            />
            <Route
              path="/producto/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login  />} /> 
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Sucursal />
          <Footer/>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
{
  /* <UseRef /> */
}

{
  /* {!user.length > 0 ? (
  <Route path="/login" element={<Login setUser={setUser} />} />
) : (
  <Route
    path="/login"
    element={<Home user={user} setUser={setUser} />}
  />
)} */
}
