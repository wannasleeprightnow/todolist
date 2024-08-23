import { useEffect, useState } from "react";
import classes from "./SignInForm.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function SignInForm() {
    const [signInForm, setSignInForm] = useState({
        username: "",
        password: "",
    });

    const [isValid, setIsValid] = useState(false);

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setIsValid(
            signInForm.username !== "" && signInForm.password !== ""
                ? true
                : false
        );
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

    const fetchWithDelay;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValid) {
            setLoading(true);
            fetchWithDelay();
        }
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
                <a href="/sign-up" className={classes.sign_up_redirect}>
                    Have not account?
                </a>
                <Button type="submit" disabled={!isValid || isLoading}>
                    Sign In
                </Button>
            </form>
        </>
    );
}
