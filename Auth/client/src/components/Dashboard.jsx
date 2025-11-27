import { LogOut } from "lucide-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/sign-in");
    setDecoded(jwtDecode(token)) 
  }, []);
  const [decoded,setDecoded]=useState("")

  const onClickHandler = () => {
    localStorage.removeItem("token");
    navigate("/sign-up");
  };
  // const token = localStorage.getItem("token");
  // const decoded = jwtDecode(token);
  return (
    <>
      <div className="flex flex-row justify-between mb-6 bg-slate-600">
        <h1 className="text-3xl text-white">Welcome {decoded.username}!</h1>
        <LogOut
          className="flex w-10 h-10 cursor-pointer text-white"
          onClick={onClickHandler}
        />
      </div>
    </>
  );
};

export default Dashboard;
