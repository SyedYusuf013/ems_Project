import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex justify-between gap-5 mt-10 ">
      <div className="w-[45%] px-10 py-5 rounded-xl bg-red-400">
        <h2 className="text-3xl font-semibold text-black">0</h2>
        <h3 className="text-xl font-medium text-black">New Task</h3>
      </div>
      <div className="w-[45%] px-10 py-5 rounded-xl bg-blue-400">
        <h2 className="text-3xl font-semibold text-black">0</h2>
        <h3 className="text-xl font-medium text-black">Completed</h3>
      </div>
      <div className="w-[45%] px-10 py-5 rounded-xl bg-green-400">
        <h2 className="text-3xl font-semibold text-black">0</h2>
        <h3 className="text-xl font-medium text-black">Accepted</h3>
      </div>
      <div className="w-[45%] px-10 py-5 rounded-xl bg-yellow-400">
        <h2 className="text-3xl font-semibold text-black">0</h2>
        <h3 className="text-xl font-medium text-black">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
