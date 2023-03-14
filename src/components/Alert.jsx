import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Alert() {
  return (
    <ToastContainer
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      pauseOnHover
      theme="light"
      limit={1}
    />
  );
}
