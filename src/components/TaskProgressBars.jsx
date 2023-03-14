export function TaskProgressBars() {
  return (
    <div className="row task-status">
      <div className="col-3">
        <h2>Pendientes</h2>
      </div>

      <div className="col-3">
        <h2>En espera</h2>
      </div>

      <div className="col-3">
        <h2>En curso</h2>
      </div>

      <div className="col-3">
        <h2>Finalizadas</h2>
      </div>
    </div>
  );
}
