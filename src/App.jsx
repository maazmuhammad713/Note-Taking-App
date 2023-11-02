import { useEffect, useState } from "react";
import AddTask from "./Component/AddTask/addTask";
import TaskList from "./Component/Tasklist/tasklist";

function App() {
  const storedTask = JSON.parse(localStorage.getItem("task"));
  const [task, setTask] = useState(
    storedTask
    //   [
    //   { name: "task", isCompleted: true },
    //   { name: "tasks", isCompleted: false },
    //   { name: "taskk", isCompleted: true },
    // ]
  );

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300 ">
      <div className="w-full max-w-screen-sm border border-blue-600 rounded p-3 bg-neutral-200">
        <AddTask setTask={setTask} />
        <TaskList task={task} />
      </div>
    </div>
  );
}

export default App;
