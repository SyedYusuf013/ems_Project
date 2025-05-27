import React, { useContext, useState } from "react";
import EmployeeDashboard from "./../Dashboard/EmployeeDashboard";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAsign, setTaskAsign] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      active_task: false,
      completed_task: false,
      failed_task: false,
      new_task: true,
      taskCategory,
      taskDate,
      taskDescription,
      taskTitle,
    });

    // const data = userData

    // data.forEach(function (elem) {
    //   if (taskAsign == elem.firstname) {
    //     elem.tasks.push(newTask)
    //     elem.taskCounts.new = elem.taskCounts.new+1
    //   }
    // })
    // setUserData(data)
    // console.log(data)

    const updatedData = userData.map((elem) => {
      if (taskAsign === elem.firstname) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskCounts: {
            ...elem.taskCounts,
            new: elem.taskCounts.new + 1,
          },
        };
      }
      return elem;
    });

    setUserData(updatedData);
    console.log(updatedData)

    alert("Your task is created successfully");
    setTaskTitle("");
    setTaskDate("");
    setTaskAsign("");
    setTaskCategory("");
    setTaskDescription("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <h1 className="mb-4 text-2xl font-semibold text-center">Create Task</h1>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap items-start justify-between w-full"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="w-4/5 px-2 py-1 text-sm bg-transparent border-[1px] rounded outline-none border-gray-400 mb-4"
              type="text"
              placeholder="Write your task title"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="w-4/5 px-2 py-1 text-sm bg-transparent border-[1px] rounded outline-none border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              value={taskAsign}
              onChange={(e) => {
                setTaskAsign(e.target.value);
              }}
              className="w-4/5 px-2 py-1 text-sm bg-transparent border-[1px] rounded outline-none border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={taskCategory}
              onChange={(e) => {
                setTaskCategory(e.target.value);
              }}
              className="w-4/5 px-2 py-1 text-sm bg-transparent border-[1px] rounded outline-none border-gray-400 mb-4"
              type="text"
              placeholder="Design, Development, etc...."
            />
          </div>
        </div>
        <div className="flex flex-col items-start w-2/5">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
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
