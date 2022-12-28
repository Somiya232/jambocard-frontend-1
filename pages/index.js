import React from "react";
import { Toaster } from "react-hot-toast";
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
