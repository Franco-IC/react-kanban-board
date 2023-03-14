import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { NewTaskBtn } from "./NewTaskBtn";
import { NewTaskModal } from "./NewTaskModal";

function handleDrop(e) {
  e.preventDefault();
  e.stopPropagation();

  // Index: [0]: HTML element ID ('objID') | [1]: Task procedence Div ('pending')
  const data = e.dataTransfer.getData("text").split(",");
  const targetStatus = e.target.id.split("-")[1]; // will be 'pending' | 'onhold' | etc...
  if (data.includes(undefined) || !targetStatus) return;

  //  checking destiny div isn't the same of the task  AND that it's a valid destiny (one of the tasks-status divs)
  if (targetStatus !== data[1] && targetStatus.length >= 6) {
    let destiny = targetStatus;
    let taskID = data[0];
    let retVal = [];

    switch (destiny) {
      case "pending":
        retVal.push(taskID, "pending");
        break;
      case "onhold":
        retVal.push(taskID, "onhold");
        break;
      case "ongoing":
        retVal.push(taskID, "ongoing");
        break;
      case "finished":
        retVal.push(taskID, "finished");
        break;
    }

    if (retVal.length > 0) return retVal;
    else return null;
  }
}

export function TaskRows() {
  const { tasks, handleChangeStatus } = useContext(TaskContext);

  return (
    <div className="row tasks">
      <NewTaskModal />
      <div
        className="col-3 tasks-container"
        id="tasks-pending"
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDrop={(e) => {
          let task = handleDrop(e);
          if (task !== undefined) {
            handleChangeStatus(task);
          }
        }}
      >
        {tasks.map((task, i) =>
          task.status === "pending" ? <TaskCard key={i} task={task} /> : null
        )}
        <NewTaskBtn />
      </div>

      <div
        className="col-3 tasks-container"
        id="tasks-onhold"
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDrop={(e) => {
          let task = handleDrop(e);
          if (task !== undefined) {
            handleChangeStatus(task);
          }
        }}
      >
        {tasks.map((task, i) =>
          task.status === "onhold" ? <TaskCard key={i} task={task} /> : null
        )}
        <NewTaskBtn />
      </div>
      <div
        className="col-3 tasks-container"
        id="tasks-ongoing"
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDrop={(e) => {
          let task = handleDrop(e);
          if (task !== undefined) {
            handleChangeStatus(task);
          }
        }}
      >
        {tasks.map((task, i) =>
          task.status === "ongoing" ? <TaskCard key={i} task={task} /> : null
        )}
        <NewTaskBtn />
      </div>
      <div
        className="col-3 tasks-container"
        id="tasks-finished"
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDrop={(e) => {
          let task = handleDrop(e);
          if (task !== undefined) {
            handleChangeStatus(task);
          }
        }}
      >
        {tasks.map((task, i) =>
          task.status === "finished" ? <TaskCard key={i} task={task} /> : null
        )}
        <NewTaskBtn />
      </div>
    </div>
  );
}
