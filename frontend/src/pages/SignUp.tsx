import SignUpForm from "../components/SignUpForm/SignUpForm.tsx";
import classes from "./SignInUp.module.css";

export default function SignIn() {
  return (
    <>
      <h1 className={classes.form_header}>TODOlist</h1>
      <SignUpForm />
    </>
  );
}
