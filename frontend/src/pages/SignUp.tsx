import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm/SignUpForm.tsx";
import classes from "./SignInUp.module.css";

export default function SignUp() {

  return (
    <>
      <h1 className={classes.form_header}>TODOlist</h1>
      <SignUpForm/>
    </>
  );
}
