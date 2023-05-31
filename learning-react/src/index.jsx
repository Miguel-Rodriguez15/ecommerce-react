import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";

import { Post } from "./assets/Post";

const root = ReactDOM.createRoot(document.getElementById("root"));
function SaveMensaje() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);
 useEffect(function(){
 console.log("render")
 },[counter])
  return (
    <article>
      <input
        onChange={(e) => {
          setMensaje(e.target.value);
        }}
      ></input>
      <button onClick={()=>{
        alert(mensaje + 'listo')
      }}>enviar</button>

<div>
      <h1>Counter:{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        restar
      </button>
      <button
        onClick={() => {
          setCounter(1000);
        }}
      >
        restart
      </button>
    </div>
    </article>
    
  );
}
root.render(
  <>
    <SaveMensaje></SaveMensaje>
    {/*  <Counter />
    
    <TaskCard ready={false} />
    <Boton text='saludar la boton'/>
    <input id="hola" onChange={handleChange}/>
    <form onSubmit={(e)=>{
      e.preventDefault()
      console.log('enviado')
    }}>
      <h1> Registro de usuario</h1>
      <button>Send</button>

    </form>
    
  
  <Boton text='Click me'/>
  <Boton text='Pay'/>
  <Boton text='' name='jose'/>

     <User
    nombre='Miguel'
    cantidad={3000}
    estado={true}
    puntos={[12,23,1321]}
    direccion={{
      conjunto:"asturias",
      etapa:"4",
      manzana:'t',
      lote:'22'
    }}>
  
    </User> */}
  </>
);
