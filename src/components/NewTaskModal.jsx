import { NewTaskForm } from "./NewTaskForm";

export function NewTaskModal() {
  return (
    <div
      className="modal fade"
      id="newTaskModal"
      tabIndex="-1"
      aria-labelledby="newTaskModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="newTaskModalLabel">
              Nueva Tarea
            </h1>
            <button
              type="button"
              className="btn-close modal-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <NewTaskForm />
          </div>
        </div>
      </div>
    </div>
  );
}
