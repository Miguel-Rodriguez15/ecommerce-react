import React from "react";
import { data } from "../data/data";
import { AiFillStar } from "react-icons/ai";
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
    <section className="container-items">
      {data.map((product) => (
        <article className="item" key={product.id}>
          <picture>
            <img src={product.image} alt={product.NombreProducto} />
          </picture>
          <div className="info-product">
            <h2>{product.NombreProducto}</h2>
            <p className="price">${product.price}</p>
            <p>Calificacion:⭐⭐⭐⭐⭐</p> 
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
          
          </div>
        </article>
      ))}
    </section>
  );
};
