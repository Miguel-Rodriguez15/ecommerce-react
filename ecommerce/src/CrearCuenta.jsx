import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "./assets/Login.css";
import { initializeApp } from "firebase/app";
import { app } from "./conf-firebase"; // Importar la configuración de Firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Login from "./Login";

import { FaUserPlus } from "react-icons/fa";

const CrearCuenta = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleSignUpClick = () => {

    onLogin(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCrearCuenta = () => {
    if (password === confirmPassword) {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Registro exitoso, puedes redirigir o realizar otras acciones
          const user = userCredential.user;
          console.log("Registro exitoso", user);
          setRegistroExitoso(true);
        })
        .catch((error) => {
          // Ocurrió un error durante el registro
          console.log("Error al crear la cuenta", error);
        });
    } else {
      console.log("Las contraseñas no coinciden");
    }
  };

  return (
    <section className="formulario-inicio-sesion">
      <article className="login-box ">   {
        registroExitoso ? (
          <Login />
        ) : (
          <form className="">
            <section className="user-box">

              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Correo electrónico"
              />
            </section>
            <section className="user-box">
              <input className="input-inicio-sesion"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Contraseña"
              />
            </section>
            <section className="user-box">
              <input className="input-inicio-sesion"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirmar contraseña"
              />
            </section>
            <a
              onClick={handleCrearCuenta}>Crear cuenta</a>

            <p>
              ¿Ya tienes cuenta?{" "}
              <a href="#" onClick={handleSignUpClick}>
                Inicia Sesión
              </a>
            </p>
          </form>
        )}
      </article>
    </section>
  );
};

export default CrearCuenta;
