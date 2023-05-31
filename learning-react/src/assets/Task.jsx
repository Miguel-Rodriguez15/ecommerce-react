import "../styles/task.css";

export function TaskCard({ ready }) {
  return (
    <>
      <article className="card">
        <h1>Mi primera tarea</h1>
        <span className={ready ? "bg-green" : "bg-red"}>
          {ready ? "tarea realizada" : "tarea pendiente"}
        </span>
      </article>
    </>
  );
}
