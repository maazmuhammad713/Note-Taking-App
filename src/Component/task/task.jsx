const Task = (props) => {
  return (
    <>
      {/* <h1 className="text-red-500 font-bold underline">{props.name}</h1> */}
      <h1 className={`text-${props.isCompleted ? "red" : "blue"}-500 text-2xl`}>
        {props.name}
      </h1>
    </>
  );
};

export default Task;
