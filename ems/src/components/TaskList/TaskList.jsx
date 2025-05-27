import React from "react";
import CurrentTask from "./CurrentTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active_task) {
          return <CurrentTask key={idx} data={elem} />;
        }
        if (elem.new_task) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed_task) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed_task) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}

      {/* {data.tasks.map((elem, idx) => {
        if (elem.active_task === true || elem.active_task === "true") {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.new_task === true || elem.new_task === "true") {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed_task === true || elem.completed_task === "true") {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed_task === true || elem.failed_task === "true") {
          return <FailedTask key={idx} data={elem} />;
        }
        return null;
      })} */}
    </div>
  );
};

export default TaskList;
