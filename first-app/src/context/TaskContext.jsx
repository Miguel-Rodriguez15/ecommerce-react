import { createContext } from "react";
import { useEffect, useState } from "react";
import { tasks as data } from "../data/task";
export const TaskContext = createContext();

function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTasks(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        descripcion: task.descripcion,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTasks,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
