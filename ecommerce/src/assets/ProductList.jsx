import React from "react";
import { data } from "../data/data";
export const ProductList = ({
  allProducts,
  setallProducts,
  contadorProducts,
  setcontadorProducts,
  total,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      
      setTotal(total + product.price * product.cantidad);
      setcontadorProducts(contadorProducts + product.cantidad);
      return setallProducts([...products]);
    }
    setTotal(total + product.price * product.cantidad);
    setcontadorProducts(contadorProducts + product.cantidad);
    setallProducts([...allProducts, product]);
  };

  return (
    <div className="container-items">
      {data.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.image} alt={product.NombreProducto} />
          </figure>
          <div className="info-product">
            <h2>{product.NombreProducto}</h2>
            <p className="price">${product.price}</p>
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
