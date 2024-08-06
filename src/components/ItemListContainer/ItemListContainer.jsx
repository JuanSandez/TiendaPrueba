import React, { useContext, useEffect, useState } from "react";
import { getProductos, getProductosByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Sucursal from "../Sucursal/Sucursal";
import ImagenCarousel from "../ImagenCarousel/ImagenCarousel";

const ItemListContainer = ({ title }) => {
  const [product, setProduct] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const coleccion = collection(db, "productos");
      const queryRef = !categoryId
        ? coleccion
        : query(coleccion, where("categoria", "==", categoryId));

      const response = await getDocs(queryRef);
      const productos = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id,
        };
        return newItem;
      });
      setProduct(productos);
      // console.log(response);
    };
    getData();
  }, [categoryId]);

  return (
    <>
    <ImagenCarousel/>
    <div className="container">
      <h2>{title}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <ItemList product={product} />
      </div>
    </div>
      <Sucursal />
    </>
  );
};

export default ItemListContainer;


