import React, { useContext, useEffect, useState } from "react";
import { getProductos, getProductosByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({title}) => {
  const [product, setProductos] = useState([]);

  const { categoryId } = useParams();

  // useEffect(() => {
  //   getProductos()
  //     .then((el) => setProductos(el))
  //     .catch((error) => console.log(error));
  // }, []);
  useEffect(() => {
    const dataProductos = categoryId ? getProductosByCategory(categoryId) : getProductos()
    dataProductos
      .then((el) => setProductos(el))
      .catch((error) => console.log(error));
  }, [categoryId]);

  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <ItemList product={product} />
      </div>
    </div>
  );
};

export default ItemListContainer;
