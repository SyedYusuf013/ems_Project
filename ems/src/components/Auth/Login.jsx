import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  // 2 way binding

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    // console.log("email is", email);
    // console.log("password is", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen px-4 sm:px-6 md:px-10">
      <div className="max-w-xs p-8 border-2 sm:max-w-sm md:max-w-md lg:max-w-lg sm:p-12 md:p-16 lg:p-20 border-emerald-600 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="mb-6 text-2xl font-semibold text-center text-white md:text-3xl">
            Log in
          </h2>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            // className="px-5 py-3 mt-4 text-xl text-white bg-transparent border-2 rounded-full outline-none border-emerald-600 placeholder:text-gray-400"
            className="w-full px-5 py-3 mt-4 text-xl text-white bg-transparent border-2 rounded-full outline-none border-emerald-600 placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            // className="px-5 py-3 mt-4 text-xl text-white bg-transparent border-2 rounded-full outline-none border-emerald-600 placeholder:text-gray-400"
            className="w-full px-5 py-3 mt-4 text-xl text-white bg-transparent border-2 rounded-full outline-none border-emerald-600 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button
            // className="text-white outline-none bg-emerald-600 rounded-full px-5 py-3 text-xl placeholder:text-gray-400 mt-4 w-[269.6px] h-[55.2px]"
            className="text-white outline-none bg-emerald-600 rounded-full px-5 py-3 text-xl placeholder:text-gray-400 mt-4 w-full h-[55.2px]"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
