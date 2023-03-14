import React, { useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
import { toast } from "react-toastify";

export function NewTaskForm() {
  const [formValues, setFormValues] = useState({
    title: "",
    status: "",
    description: "",
  });

  const { handleSubmit } = useContext(TaskContext);

  // Changing state on User Input
  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  // Submitting Task
  function _handleSubmit(e) {
    e.preventDefault();

    // Checking empty values
    if (
      formValues.title === "" ||
      formValues.status === "" ||
      formValues.description === ""
    ) {
      // Triggering Alert
      toast.warn("Uno o más campos se encuentran vacíos", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        progress: undefined,
        theme: "light",
        toastId: "fields-toast",
      });
    } else {
      // Submitting Task
      setFormValues({
        title: "",
        status: "",
        description: "",
      });

      document.querySelector(".modal-close").click();
      handleSubmit({ ...formValues });
    }
  }

  return (
    <>
      <form onSubmit={_handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titleInput" className="form-label">
            Título
          </label>
          <input
            maxLength={30}
            type="text"
            className="form-control"
            id="titleInput"
            placeholder="Título de tu tarea"
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="statusInput" className="form-label">
            Estado
          </label>
          <select
            name="status"
            onChange={handleChange}
            className="form-select"
            id="statusInput"
            value={formValues.status}
          >
            <option value="" disabled hidden>
              Selecciona el estado de tu tarea
            </option>
            <option value="pending">Pendiente</option>
            <option value="onhold">En espera</option>
            <option value="ongoing">En curso</option>
            <option value="finished">Finalizada</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="descriptionInput" className="form-label">
            Descripción
          </label>
          <textarea
            rows={3}
            maxLength={150}
            className="form-control"
            id="descriptionInput"
            placeholder="Descripción de tu tarea (150 caracteres max.)"
            name="description"
            value={formValues.description}
            onChange={handleChange}
          />
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
          <button type="submit" className="btn btn-primary">
            Crear Tarea
          </button>
        </div>
      </form>
    </>
  );
}
