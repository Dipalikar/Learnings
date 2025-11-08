import React from "react";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="sign-up" element={<SignUp/>}/>
      </Routes>
    </div>
    
  );
};

export default App;
