import { createContext, useState, useEffect } from "react";
import { getTasks, saveTask, deleteTask, changeTaskStatus } from "../services";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function removeClasslist(classlistName) {
    [...document.getElementsByClassName(classlistName)].forEach((element) => {
      element.classList.remove(classlistName);
    });
  }

  async function loadTasks() {
    const response = await getTasks();
    removeClasslist("fading");

    if (response) setTasks(response.data);
    else setTasks([]);
  }

  // loading tasks on app render (only once)
  useEffect(() => {
    loadTasks();
  }, []);

  async function handleSubmit(data) {
    await saveTask(data);

    loadTasks();
    removeClasslist("appearing");
  }

  async function handleDelete(id) {
    await deleteTask(id);

    loadTasks();
    removeClasslist("appearing");
  }

  async function handleChangeStatus(data) {
    await changeTaskStatus(data);

    loadTasks();
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleSubmit,
        handleDelete,
        handleChangeStatus,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
