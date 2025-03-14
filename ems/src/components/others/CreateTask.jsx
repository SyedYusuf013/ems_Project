import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <h1 className="mb-4 text-2xl font-semibold text-center">Create Task</h1>
      <form className="flex flex-wrap items-start justify-between w-full">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="w-4/5 px-2 py-1 text-sm bg-transparent border-[1px] rounded outline-none border-gray-400 mb-4"
              type="text"
              placeholder="Write your task title"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="w-4/5 px-2 py-1 text-sm bg-transparent border-[1px] rounded outline-none border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              className="w-4/5 px-2 py-1 text-sm bg-transparent border-[1px] rounded outline-none border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="w-4/5 px-2 py-1 text-sm bg-transparent border-[1px] rounded outline-none border-gray-400 mb-4"
              type="text"
              placeholder="Design, Development, etc...."
            />
          </div>
        </div>
        <div className="flex flex-col items-start w-2/5">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 px-4 py-2 text-sm bg-transparent border-[1px] rounded outline-none border-gray-400 mb-4"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Detailed description of task (Max 500 words)"
          ></textarea>
          <button className="w-full px-5 py-3 mt-4 text-sm rounded bg-emerald-500 hover:bg-emerald-600">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
