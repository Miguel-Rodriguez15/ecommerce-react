import { useState } from "react";
import Header from "./assets/Header";
import Login from "./Login";
import CrearCuenta from "./CrearCuenta";
import "./App.css";
import { Navbar } from "./Navbar";
import { ProductList } from "./assets/ProductList";
import Footer from "./Footer";


function App() {
  const [allProducts, setallProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [contadorProducts, setcontadorProducts] = useState(0);
  const [activeComponent, setActiveComponent] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderMainContent = () => {
    if (activeComponent === "Login") {
      return <Login />;
    }

    if (activeComponent === "CrearCuenta") {
      return <CrearCuenta />;
    }

    return (
      <ProductList
        allProducts={allProducts}
        setallProducts={setallProducts}
        total={total}
        setTotal={setTotal}
        contadorProducts={contadorProducts}
        setcontadorProducts={setcontadorProducts}
      />
    );
  };

  return (
    <>
      <Navbar
        allProducts={allProducts}
        setallProducts={setallProducts}
        total={total}
        setTotal={setTotal}
        contadorProducts={contadorProducts}
        setcontadorProducts={setcontadorProducts}
        setActiveComponent={setActiveComponent}
      />

      <main>{renderMainContent()}</main>

      <Footer />
    </>
  );
}

export default App;