import { useEffect, useState } from "react";
import classes from"./SignInForm.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function SignInForm ( setActiveTab ) {

	const [signInForm, setSignInForm] = useState({
		username: "",
		password: "",
	  });
  
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
      setIsValid(signInForm.username !== "" && signInForm.password !== "" ? true : false);
  }, [signInForm]);
	
	  const handleUsernameChange = (event: any) => {
      setSignInForm((prev) => ({
        ...prev,
        username: event.target.value,
    }));
	  };
	
	  const handlePasswordChange = (event: any) => {
		  setSignInForm((prev) => ({ 
        ...prev, 
        password: event.target.value,
    }));
	  };


	return (
    <>
		<form className={classes.sign_in_form}>
          <Input
            type="text"
            value={signInForm.username}
            placeholder="Username"
            onChange={handleUsernameChange}
          />
          <Input
            type="password"
            value={signInForm.password}
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          <a href="/sign-up" className={classes.sign_up_redirect}>Have not account?</a>
          <Button type="submit" disabled={!isValid} onClick={() => console.log(signInForm)}>Sign In</Button>
  </form>
  </>
	)
}