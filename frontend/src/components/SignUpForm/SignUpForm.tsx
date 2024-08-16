import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import classes from "./SignUpForm.module.css";

export default function SignUpForm () {

	const [signUpForm, setSignUpForm] = useState({
		email: "",
		username: "",
		password: "",
	  });

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
      setIsValid(signUpForm.email !== "" && signUpForm.username !== "" && signUpForm.password !== "" ? true : false);
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
          <Button type="submit" disabled={!isValid}>Sign Up</Button>
  </form>
	)
}