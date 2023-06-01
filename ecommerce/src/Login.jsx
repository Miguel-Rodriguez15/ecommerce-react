import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "./assets/Login.css";
import CrearCuenta from "./CrearCuenta";
import { app, auth } from "./conf-firebase";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

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
      //Si inicia y todo sale bien
      const user = userCredential.user;
      console.log('Inicio de sesión exitoso', user);
    })
    .catch((error) => {
      //Si ocurre un error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error al iniciar sesión', errorCode, errorMessage);
    });
  };

  const handleSignUpSuccess = () => {
    setShowSignUp(false);
  };

  return (
    <div>
      {showSignUp ? (
        <CrearCuenta onLogin={handleSignUpSuccess} />
      ) : (
        <div id="formulario-inicio-sesion">
          <FaUserCircle id="FaUserCircle" />
          <input className="input-inicio-sesion"
            type="email"
            id="correo"
            value={email}
            onChange={handleEmailChange}
            placeholder="Correo electrónico"
          />
          <input className="input-inicio-sesion"
            type="password"
            id="contrasegna"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Contraseña"
          />
          <button className="btn-inicio-sesion" onClick={handleLogin}>Iniciar sesión</button>
          <p>
            ¿Aún no tienes cuenta?{" "}
            <a href="#" onClick={handleSignUpClick}>
              Regístrate
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
