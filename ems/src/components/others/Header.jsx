import React, { useEffect, useState } from "react";
import App from "../../App";

const Header = ({changeUser}) => { 
  // agar use state or effect use krna h to upr header me props hata kr {data} daal dena chal jayega
  
  const [username, setUsername] = useState("");

  // useEffect(() => {
  //   if (!data) {
  //     setUsername("Admin");
  //   } else {
  //     setUsername(data.firstname);
  //   }
  // }, [data]);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser?.firstname) {
          setUsername(parsedUser.firstname);
        }
      } catch (error) {
        console.error("Invalid JSON in localStorage for 'loggedInUser'");
      }
    }
  }, []);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser",'');
    changeUser('')
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium text-white">
        Hello <br />{" "}
        <span className="text-3xl font-semibold"> {username} 👋 </span>
      </h1>
      <button
        // onClick={handleLogout}
        onClick={logOutUser}
        className="px-5 py-2 text-lg font-medium text-white bg-red-600 rounded-md"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
