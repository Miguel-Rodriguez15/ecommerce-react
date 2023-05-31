export function Greting({ title, name }) {
  console.log(title, name);
  return (
    <h1>
      {title}
      {name}
    </h1>
  );
}

export function User({nombre, cantidad, estado, puntos, direccion}) {
  return (
    <>
      <h1>{nombre}</h1>
      <p>{cantidad}</p>
      <h2>{estado?'casado':'soltero'}</h2>
      <p>{puntos.toString()}</p>
      <ul>
        <li>{direccion.conjunto}</li>
        <li>{direccion.etapa}</li>
        <li>{direccion.lote}</li>
      
      </ul>
    </>
  );
}
