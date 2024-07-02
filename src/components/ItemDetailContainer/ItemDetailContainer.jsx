import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductosById } from "../../data/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { BarLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  // Redireccion a ruta existente
  const navigate = useNavigate();

  useEffect(() => {
    getProductosById(productId)
      .then((prod) => {
        if (!prod) {
          navigate("/*");
        } else {
          setProducto(prod);
        }
      })
      .catch((error) => console.log(error));
  }, [productId]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      getProductosById(productId)
        .then((prod) => {
          setProducto(prod);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }, 2000);
  }, [productId]);

  return (
    <div className="loading">
      {loading ? <BarLoader color="#fd290d" /> : <ItemDetail {...producto} />}
    </div>
  );
};

export default ItemDetailContainer;
