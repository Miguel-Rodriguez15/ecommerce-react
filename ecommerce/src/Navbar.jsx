import React, { useState } from "react"
import Login from "./Login";

import SearchBox from "./SearchBox";
import "./assets/Navbar.css";

import CrearCuenta from "./CrearCuenta";
import "./assets/pruebas.css";
import
 {
  FaSearchDollar,
  FaUserAlt,
  FaCaretDown,
  FaCaretUp,
} from "react-icons/fa";

export const Navbar = ({
  allProducts,
  setallProducts,
  total,
  setTotal,
  contadorProducts,
  setcontadorProducts,
  setActiveComponent,
}) => {
  const [activo, setActivo] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleCategoriesClick = () => {
    setCategoriesOpen(!isCategoriesOpen);
    setLoginOpen(false);
    setActivo(false);
  };

  const handleLoginClick = () => {
    setLoginOpen(!isLoginOpen);
    setCategoriesOpen(false);
    setActivo(false);
  };

  const handleCartClick = () => {
    setActivo(!activo);
    setLoginOpen(false);
    setCategoriesOpen(false);
  };

  const onDeleteProduct = (product) => {
    const resultado = allProducts.filter((item) => item.id !== product.id);
    setTotal(total - product.price * product.cantidad);
    setcontadorProducts(contadorProducts - product.cantidad);
    setallProducts(resultado);
  };

  const onClearCart = () => {
    setallProducts([]);
    setTotal(0);
    setcontadorProducts(0);
  };

  const changeMainLogin = () => {
    setActiveComponent("Login");
  };

  const changeMainCuenta = () => {
    setActiveComponent("CrearCuenta");
  };

  const changeMainHome = () => {
    setActiveComponent(null);
  };

  return (
    <>
      <header className="container">
        <picture className="containerLogo">
          {" "}
          <a onClick={changeMainHome} className="home-link">
           <h2>Home</h2>  
          </a>
          <img className="logo" src="" alt="" />
        </picture>
        <nav className="nav-container">
          <a>
            <SearchBox />
          </a>
          <div className="categories-container">
            <a href="#" onClick={handleCategoriesClick}>
              Categorías {isCategoriesOpen ? <FaCaretUp /> : <FaCaretDown />}
            </a>
            {isCategoriesOpen && (
              <ul className="nav-list">
                <li>lo mas visto</li>
                <li>mas comprados</li>
                <li>Elegidos para ti</li>
              </ul>
            )}
          </div>
          <div className="categories-container">
            <a href="#" onClick={handleLoginClick}>
              <FaUserAlt /> {isLoginOpen ? <FaCaretUp /> : <FaCaretDown />}
            </a>
            {isLoginOpen && (
              <section className="container-login">
                <div
                  className="btn-login iniciar-sesion"
                  onClick={changeMainLogin}
                >
                  Iniciar Sesión
                </div>

                <div
                  className="btn-login crear-cuenta"
                  onClick={changeMainCuenta}
                >
                  Crear Cuenta
                </div>
              </section>
            )}
          </div>

          <div className="container-icon">
            <div
              className="container-cart-icon"
              onClick={handleCartClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="icon-cart"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <div className="count-products">
                <span id="contador-productos">{contadorProducts}</span>
              </div>
            </div>

            <div
              className={`container-cart-products ${
                activo ? "" : "hidden-cart"
              }`}
            >
              {allProducts.length ? (
                <>
                  <div className="row-product">
                    {allProducts.map((product) => (
                      <div className="cart-product" key={product.id}>
                        <div className="info-cart-product">
                          <span className="cantidad-producto-carrito">
                            {product.cantidad}
                          </span>
                          <p className="titulo-producto-carrito">
                            {product.NombreProducto}
                          </p>
                          <span className="precio-producto-carrito">
                            ${product.price}
                          </span>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="icon-close"
                          onClick={() => onDeleteProduct(product)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>

                  <div className="cart-total">
                    <h3>Total:</h3>
                    <span className="total-pagar">${total}</span>
                  </div>

                  <button className="btn-clear-all" onClick={onClearCart}>
                    Vaciar Carrito
                  </button>
                </>
              ) : (
                <p className="cart-empty">El carrito está vacío</p>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
