import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import classes from "./SignUpForm.module.css";

export default function SignUpForm({ setSignedUp }) {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(
      signUpForm.email !== "" &&
        signUpForm.username !== "" &&
        signUpForm.password !== ""
        ? true
        : false
    );
  }, [signUpForm]);

  const handleEmailChange = (event: any) => {
    setSignUpForm((prev) => ({ ...prev, email: event.target.value }));
  };

  const handleUsernameChange = (event: any) => {
    setSignUpForm((prev) => ({ ...prev, username: event.target.value }));
  };

  const handlePasswordChange = (event: any) => {
    setSignUpForm((prev) => ({ ...prev, password: event.target.value }));
  };

  const sendSignUpUserForm = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/sign_up", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: signUpForm.email,
          username: signUpForm.username,
          password: signUpForm.password,
        }),
      });

      if (response.ok) {
        <Navigate to="/sign-in" />
        setSignedUp(true);
        console.log(response.ok)
      } else {
        throw new Error(`Error status code: ${response.status}`)
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className={classes.sign_up_form}>
      <Input
        type="email"
        value={signUpForm.email}
        placeholder="Email"
        onChange={handleEmailChange}
        required
      />
      <Input
        type="text"
        value={signUpForm.username}
        placeholder="Username"
        onChange={handleUsernameChange}
        required
      />
      <Input
        type="password"
        value={signUpForm.password}
        placeholder="Password"
        onChange={handlePasswordChange}
        required
      />
      <Button type="submit" disabled={!isValid} onClick={() => sendSignUpUserForm()}>
        Sign Up
      </Button>
    </form>
  );
}
