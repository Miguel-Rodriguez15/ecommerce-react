import React, { useState, useEffect, useRef } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./conf-firebase";
import SearchBox from "./SearchBox";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export const Navbar = ({
  allProducts,
  setallProducts,
  total,
  setTotal,
  contadorProducts,
  setcontadorProducts,
  setActiveComponent,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const [activo, setActivo] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleLoginClick = () => {
    setLoginOpen(!isLoginOpen);
    setActivo(false);
  };

  const handleCartClick = () => {
    setActivo(!activo);
    setLoginOpen(false);
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

  const handleOutsideClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setActivo(false);
      setLoginOpen(false);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sesión cerrada");
        setActiveComponent(null);
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.log("Error al cerrar sesión: ", error);
      });
  };
  

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <header className="container" ref={navbarRef}>
        <picture className="containerLogo">
          <a onClick={changeMainHome} className="home-link">
            <h2>El Rincón del BIT</h2>
          </a>
          <img className="logo" src="" alt="" />
        </picture>
        <nav className="nav-container">
          <a>
            <SearchBox />
          </a>

          <section className="categories-container">
            <a href="#" onClick={handleLoginClick}>
              <AiOutlineUser className="user" />{" "}
              {isLoginOpen ? <FaCaretUp /> : <FaCaretDown />}
            </a>
            {isLoginOpen && (
              <article className="container-login">
                {isLoggedIn ? (
                  <>
                    <section
                      className="btn-login iniciar-sesion"
                      onClick={handleLogout}
                    >
                      Cerrar Sesión
                    </section>
                  </>
                ) : (
                  <>
                    <section
                      className="btn-login iniciar-sesion"
                      onClick={changeMainLogin}
                    >
                      Iniciar Sesión
                    </section>
                    <section
                      className="btn-login crear-cuenta"
                      onClick={changeMainCuenta}
                    >
                      Crear Cuenta
                    </section>
                  </>
                )}
              </article>
            )}
          </section>
          {isLoggedIn && (
            <section className="container-icon">
              <article className="container-cart-icon" onClick={handleCartClick}>
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
                <section className="count-products">
                  <span id="contador-productos">{contadorProducts}</span>
                </section>
              </article>

              <article
                className={`container-cart-products ${
                  activo ? "" : "hidden-cart"
                }`}
              >
                {allProducts.length ? (
                  <>
                    <section className="row-product">
                      {allProducts.map((product) => (
                        <article className="cart-product" key={product.id}>
                          <section className="info-cart-product">
                            <span className="cantidad-producto-carrito">
                              {product.cantidad}
                            </span>
                            <p className="titulo-producto-carrito">
                              {product.NombreProducto}
                            </p>
                            <span className="precio-producto-carrito">
                              ${product.price}
                            </span>
                          </section>
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
                        </article>
                      ))}
                    </section>

                    <section className="cart-total">
                      <h3>Total:</h3>
                      <span className="total-pagar">${total}</span>
                    </section>
                    <button className="btn-clear-all" onClick={onClearCart}>
                      Vaciar Carrito
                    </button>
                  </>
                ) : (
                  <p className="cart-empty">El carrito está vacío</p>
                )}
              </article>
            </section>
          )}
        </nav>
      </header>
    </>
  );
};