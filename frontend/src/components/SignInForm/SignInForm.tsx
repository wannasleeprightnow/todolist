import React, { useEffect, useState } from "react";
import classes from "./SignInForm.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

const SignInForm: React.FC = () => {
    const [signInForm, setSignInForm] = useState({
        username: "",
        password: "",
    });

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        setIsValid(
            signInForm.username !== "" && signInForm.password !== ""
                ? true
                : false
        );
    }, [signInForm]);

    return (
        <>
            <form className={classes.sign_in_form}>
                <Input
                    type="text"
                    value={signInForm.username}
                    placeholder="Username"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                        setSignInForm((prev) => ({
                            ...prev,
                            username: event.target.value,
                        }))
                    }}
                    required
                />
                <Input
                    type="password"
                    value={signInForm.password}
                    placeholder="Password"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                        setSignInForm((prev) => ({
                            ...prev,
                            password: event.target.value,
                        }))
                    }}
                    required
                />
                <a href="/sign-up" className={classes.sign_up_redirect}>
                    Have not account?
                </a>
                <Button type="submit" disabled={!isValid}>
                    Sign In
                </Button>
            </form>
        </>
    );
}

export default SignInForm;
