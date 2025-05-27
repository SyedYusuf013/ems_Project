import React from "react";
// import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex justify-between gap-5 mt-10 ">
      <div className="w-[45%] px-10 py-5 rounded-xl bg-green-400">
        <h2 className="text-3xl font-semibold text-black">
          {data.taskCounts.active}
        </h2>
        <h3 className="text-xl font-medium text-black">Current Task</h3>
      </div>
      <div className="w-[45%] px-10 py-5 rounded-xl bg-red-400">
        <h2 className="text-3xl font-semibold text-black">
          {data.taskCounts.new}
        </h2>
        <h3 className="text-xl font-medium text-black">New Task</h3>
      </div>
      <div className="w-[45%] px-10 py-5 rounded-xl bg-blue-400">
        <h2 className="text-3xl font-semibold text-black">
          {data.taskCounts.completed}
        </h2>
        <h3 className="text-xl font-medium text-black">Completed Task</h3>
      </div>
      <div className="w-[45%] px-10 py-5 rounded-xl bg-yellow-400">
        <h2 className="text-3xl font-semibold text-black">
          {data.taskCounts.failed}
        </h2>
        <h3 className="text-xl font-medium text-black">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
