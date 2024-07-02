import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseRef from "./components/UseRef/UseRef";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import PageNotFound from "./components/PageNotFund/PageNotFund";
import { ContextProvider } from "./context/CartContext";
import Formulario from "./components/Formulario/Formulario";
import Home from "./components/Home/Home";
import { useState } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [user, setUser] = useState([]);

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          {!user.length > 0 ? (
            <Formulario setUser={setUser} />
          ) : (
            <Home user={user} setUser={setUser} />
          )}
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/producto/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
      {/* <UseRef /> */}
    </>
  );
}

export default App;
