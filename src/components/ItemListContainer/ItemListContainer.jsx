import React, { useContext, useEffect, useState } from "react";
import { getProductos } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [product, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    getProductos()
      .then((el) => setProductos(el))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <ItemList product={product} />
      </div>
    </div>
  );
};

export default ItemListContainer;
