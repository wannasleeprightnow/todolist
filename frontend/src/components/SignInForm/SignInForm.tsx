import { useEffect, useState } from "react";
import classes from"./SignInForm.module.css";

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
		<form>
          <input
            type="text"
            value={signInForm.username}
            placeholder="Username"
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            value={signInForm.password}
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          <a href="/sign-up" className={classes.sign_up_redirect}>Have not account?</a>
          <button type="submit" disabled={!isValid} onClick={() => console.log(signInForm)}>Sign In</button>
  </form>
  </>
	)
}