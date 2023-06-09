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
    if (!isLoggedIn) {
      if (activeComponent === "Login") {
        return <Login onLogin={() => setIsLoggedIn(true)} />;
      }

      if (activeComponent === "CrearCuenta") {
        return <CrearCuenta onLogin={() => setIsLoggedIn(true)} />;
      }
    }

    return (
      <ProductList
        allProducts={allProducts}
        setallProducts={setallProducts}
        total={total}
        setTotal={setTotal}
        contadorProducts={contadorProducts}
        setcontadorProducts={setcontadorProducts}
        isLoggedIn={isLoggedIn}
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
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <main>{renderMainContent()}</main>

      <Footer />
    </>
  );
}

export default App;