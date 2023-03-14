import { Alert } from "./components/Alert";
import { Footer } from "./components/Footer";
import { TaskProgressBars } from "./components/TaskProgressBars";
import { TaskRows } from "./components/TaskRows";

function App() {
  return (
    <>
      <TaskProgressBars />
      <TaskRows />
      <Footer />
      <Alert />
    </>
  );
}

export default App;
