import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className="px-3 py-1 text-sm bg-red-600 rounded">
          {data.task_category}
        </h3>
        <h4 className="text-sm">{data.task_date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-black">
        {data.task_title}
      </h2>
      <p className="mt-2 text-sm text-black">{data.task_description}</p>
      <div className="flex justify-between mt-2">
        <button className="px-2 py-1 text-sm bg-purple-500">Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
