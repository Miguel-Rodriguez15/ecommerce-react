import { useState } from "react";
import Header from "./assets/Header";

import Login from "./Login";

import "./App.css";
import { Navbar } from "./Navbar";
import { ProductList } from "./assets/ProductList";

function App() {
  const [allProducts, setallProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [contadorProducts, setcontadorProducts] = useState(0);
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
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
      />

      {showLogin ? (
        <ProductList
          allProducts={allProducts}
          setallProducts={setallProducts}
          total={total}
          setTotal={setTotal}
          contadorProducts={contadorProducts}
          setcontadorProducts={setcontadorProducts}
        />
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;