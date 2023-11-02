import { useEffect, useState } from "react";

const Task = (props) => {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);
  const [name, setName] = useState(props.name);

  const isCompletedHandler = () => {
    console.log("haha");
    setIsCompleted(!isCompleted);
  };
  const deleteHandler = () => {
    console.log("deleted");
    setName("");
  };

  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log("inside effect");
  //   const interval = setInterval(() => {
  //     setCounter((prev) => prev + 1);
  //   }, 2000);

  //   return () => {
  //     clearInterval(interval);
  //     console.log("return effect");
  //   }; // this is used when we unmount the component(e.g switch from one page to another)
  // }, []);

  //get/set data local storage, and when refresh the page, the component must not continue from start .
  return (
    <div className="flex justify-around p-4">
      {/* <h1 className="text-red-500 font-bold underline">{props.name}</h1> */}
      <h1
        className={`basis-1/4 text-${
          isCompleted ? "blue" : "red"
        }-500 text-2xl`}
      >
        {name}
        {/* {counter} */}
      </h1>
      <button
        onClick={isCompletedHandler}
        className="bg-blue-500 text-white p-3 rounded"
      >
        {isCompleted ? "Completed" : "Incompleted"}
      </button>
      <button
        onClick={deleteHandler}
        className="bg-red-500 text-white p-3 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
