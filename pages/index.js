import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import SignUp from "./sign-up/sign-up";
// import "../styles/signup.css"
const index = () => {
  
  return (
    <>
      <Toaster />
      <SignUp />
    </>
  );
};

export default index;
