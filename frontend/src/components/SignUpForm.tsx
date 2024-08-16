import { useEffect, useState } from "react";

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
		<form>
          <input
            type="email"
            value={signUpForm.email}
            placeholder="Email"
            onChange={handleEmailChange}
            required
          />
          <input
            type="text"
            value={signUpForm.username}
            placeholder="Username"
            onChange={handleUsernameChange}
            required
          />
          <input
            type="password"
            value={signUpForm.password}
            placeholder="Password"
            onChange={handlePasswordChange}
            required
          />
          <button disabled={!isValid} type="submit">Sign Up</button>
  </form>
	)
}