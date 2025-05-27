import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div id="alltask" className="bg-[#1c1c1c] p-5 mt-5 rounded">
      <div className="flex justify-between px-4 py-2 mb-2 bg-red-400 rounded">
        <h2 className="w-1/5 text-lg font-medium bg-red-">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium ">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium ">Active</h5>
        <h5 className="w-1/5 text-lg font-medium ">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium ">Failed</h5>
      </div>
      <div className="">
        {userData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="flex justify-between px-4 py-2 mb-2 border-2 rounded border-emerald-500"
            >
              <h2 className="w-1/5 text-lg font-medium text-white">
                {elem.firstname}
              </h2>
              <h3 className="w-1/5 text-lg font-medium text-blue-500 ">
                {elem.taskCounts.new}
              </h3>
              <h5 className="w-1/5 text-lg font-medium text-yellow-500 ">
                {elem.taskCounts.active}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-green-500 ">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-red-500 ">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
