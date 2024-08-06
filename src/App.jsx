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
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/Checkout";

function App() {
  

  return (
    <>
      <ContextProvider>
        <div className="container2">

        <BrowserRouter>
        <Navbar />
            
          <Routes>
            <Route path="/" element={<ItemListContainer title="¿Que llevas hoy?" />} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer title="Tienda" />}/>
            <Route path="/producto/:productId" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login  />} /> 
            <Route path="/checkout" element={<Checkout  />} /> 
            <Route path="*" element={<PageNotFound />} />
          </Routes>
            
          <Footer/>
        </BrowserRouter>
        </div>
      </ContextProvider>
    </>
  );
}

export default App;

