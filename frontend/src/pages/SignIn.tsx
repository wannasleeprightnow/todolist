import SignInForm from "../components/SignInForm/SignInForm.tsx";
import classes from "./SignInUp.module.css";

export default function SignIn() {
  return (
    <>
      <h1 className={classes.form_header}>TODOlist</h1>
      <SignInForm />
    </>
  );
}
