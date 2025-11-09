import React from "react";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
      </Routes>
    </div>
    
  );
};

export default App;
