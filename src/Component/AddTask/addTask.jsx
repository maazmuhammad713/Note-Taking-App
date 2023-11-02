import { useState } from "react";

const AddTask = (props) => {
  const [input, setInput] = useState("");

  const taskHandler = () => {
    // props.setTask([...props.task, { name: input }]);
    props.setTask((prev) => {
      return [...prev, { name: input, isCompleted: false }];
    });
    setInput("");
  };
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="border border-blue-600 rounded p-2"
        placeholder="Enter a task..."
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
        onClick={taskHandler}
      >
        Add
      </button>
    </>
  );
};
export default AddTask;
