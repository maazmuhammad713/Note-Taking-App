import Task from "../task/Task";

const TaskList = (props) => {
  return (
    <div className="mt-4">
      {props.task.map((data) => {
        return (
          <Task
            key={data.name}
            name={data.name}
            isCompleted={data.isCompleted}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
