import { useEffect, useState } from "react";
import AddTask from "./Component/AddTask/addTask";
import TaskList from "./Component/Tasklist/tasklist";

function App() {
  const storedTask = JSON.parse(localStorage.getItem("task"));
  const [task, setTask] = useState(
    storedTask || []
    //   [
    //   { name: "task", isCompleted: true },
    //   { name: "tasks", isCompleted: false },
    //   { name: "taskk", isCompleted: true },
    // ]
  );
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  const filteredResult = task.filter((data) => {
    return data.name.toLowerCase().includes(searchResult.toLowerCase());
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300 ">
      <div className="w-full max-w-screen-sm border border-blue-600 rounded p-3 bg-neutral-200">
        <AddTask setTask={setTask} />
        <input
          type="text"
          placeholder="Search"
          value={searchResult}
          className="border border-blue-600 rounded p-2 ml-2"
          onChange={(e) => setSearchResult(e.target.value)}
        />
        <TaskList task={filteredResult} setTask={setTask} />
      </div>
    </div>
  );
}

export default App;
