import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

// fetch tasks from API
export async function getTasks() {
  try {
    const response = await axios({ url: `${baseURL}/tasks`, method: "GET" });

    return response;
  } catch (e) {
    console.log(e.message + " (No tasks yet)");
  }
}

// post new task
export async function saveTask(taskData) {
  try {
    const response = await axios({
      url: `${baseURL}/tasks/new`,
      method: "POST",
      data: taskData,
    });

    return response;
  } catch (e) {
    console.log(e.message);
  }
}

export async function deleteTask(taskId) {
  try {
    const response = await axios({
      url: `${baseURL}/tasks/delete/${taskId}`,
      method: "DELETE",
    });

    return response;
  } catch (e) {
    console.log(e.message);
  }
}

export async function changeTaskStatus(taskData) {
  try {
    const [taskId, taskStatus] = taskData;

    const response = await axios({
      url: `${baseURL}/tasks/edit/${taskId}`,
      method: "PUT",
      data: { status: taskStatus },
    });

    return response;
  } catch (e) {
    console.log(e.message);
  }
}
