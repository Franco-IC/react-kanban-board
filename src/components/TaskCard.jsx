import { useContext } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../context/TaskContext";
import { DeleteTaskBtn } from "./DeleteTaskBtn";

function handleDragStart(e) {
  e.target.style.opacity = "0.4";

  // Index: [0]: HTML element ID ('objID') | [1]: Task Procedence ('pending')
  let data = [
    e.target.parentElement.id,
    e.target.parentElement.parentElement.id.split("-")[1], // saving status only, otherwise it would be 'tasks-pending/onhold/etc'
  ];

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", data);
}

function handleDragEnd(e) {
  e.target.style.opacity = "1";
}

function deleteTask(taskID, deleteFn) {
  document.getElementById(taskID).classList.remove("appearing");
  document.getElementById(taskID).classList.add("fading");

  setTimeout(() => {
    deleteFn(taskID);
  }, 600);
}

// Click on Delete(x) Button
function handleClick(e, deleteFn) {
  // selecting Task HTML Element to retrieve the task ID
  let taskEl = e.target.closest("span").querySelector(".task");
  // retrieving task ID
  let taskID = taskEl.parentElement.id;

  // Triggering Alert
  const ToastMsg = () => {
    return (
      <div>
        ¿Eliminar esta tarea?
        <br />
        <button
          className="btn btn-danger"
          onClick={() => deleteTask(taskID, deleteFn)}
        >
          Eliminar
        </button>
      </div>
    );
  };

  toast.error(ToastMsg, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    pauseOnHover: true,
    progress: undefined,
    theme: "light",
    toastId: "delete-toast",
  });
}

export function TaskCard({ task }) {
  const { handleDelete } = useContext(TaskContext);

  return (
    <>
      <span className="row card-span appearing" id={`${task._id}`}>
        <div
          className="col-10 task"
          draggable="true"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <p>
            <strong>Titulo:</strong> {task.title}
          </p>
          <p>
            <strong>Descripción:</strong> {task.description}
          </p>
        </div>
        <DeleteTaskBtn handleClick={(e) => handleClick(e, handleDelete)} />
      </span>
    </>
  );
}
