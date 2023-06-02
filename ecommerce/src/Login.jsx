import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "./assets/Login.css";
import CrearCuenta from "./CrearCuenta";
import { app, auth } from "./conf-firebase";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./assets/login.css"
import { FaUserCircle } from "react-icons/fa";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Si el inicio de sesión es exitoso
        const user = userCredential.user;
        onLogin(); // Llamar a la función onLogin para indicar que el usuario ha iniciado sesión
        console.log('Inicio de sesión exitoso', user);
      })
      .catch((error) => {
        // Si ocurre un error
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error al iniciar sesión', errorCode, errorMessage);
      });
  };

  const handleSignUpSuccess = () => {
    setShowSignUp(false);
  };

  return (
    <section className="formulario-inicio-sesion">
      <article className="login-box ">
        {showSignUp ? (
          <CrearCuenta onLogin={handleSignUpSuccess} />
        ) : (

          <form className="">
            <section className="user-box">
              <input
                type="email"
                id="correo"
                value={email}
                onChange={handleEmailChange}
                placeholder="Correo electrónico"
              /></section>
            <section className="user-box">
              <input
                type="password"
                id="contrasegna"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Contraseña"
              /></section>
            <a onClick={handleLogin}>Iniciar sesión</a>
            <p>
              ¿Aún no tienes cuenta?{" "}
              <a href="#" onClick={handleSignUpClick}>
                Regístrate
              </a>
            </p>
          </form>

        )}
      </article>
    </section>
  );
};

export default Login;