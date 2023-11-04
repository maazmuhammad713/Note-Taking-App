import { useState } from "react";
import Task from "../task/Task";

const TaskList = (props) => {
  const deleteTask = (taskName) => {
    props.setTask((prevTasks) =>
      prevTasks.filter((task) => task.name !== taskName)
    );
  };

  return (
    <div className="mt-4">
      {props.task.map((data) => {
        return (
          <Task
            key={data.name}
            name={data.name}
            isCompleted={data.isCompleted}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
