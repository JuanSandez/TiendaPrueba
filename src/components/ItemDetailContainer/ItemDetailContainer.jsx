import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductosById } from "../../data/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { BarLoader } from "react-spinners";
import { db } from "../../config/firebase";

import { doc, getDoc } from "firebase/firestore";
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  // Redireccion a ruta existente
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const queryRef = doc(db, "productos", productId);
        
        const response = await getDoc(queryRef);
        
        const newItem = {
          ...response.data(),
          id: response.id,
        };
        
        setProducto(newItem);
        // console.log(response);
      } catch (error) {
        console.error("Error al obtener el producto de Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    getProduct();
  }, [productId]);

  return (
    <div className="loading">
      {loading ? <BarLoader color="#fd290d" /> : <ItemDetail {...producto} />}
    </div>
  );
};

export default ItemDetailContainer;
