import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import Input from "../Input/Input";
import classes from "./SignUpForm.module.css";

const SignUpForm: React.FC = () => {
    const navigate = useNavigate();

    const [signUpForm, setSignUpForm] = useState({
        email: "",
        username: "",
        password: "",
    });
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setIsValid(
            signUpForm.email !== "" &&
                signUpForm.username !== "" &&
                signUpForm.password !== ""
        );
    }, [signUpForm]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isValid) {
            sendSignUpForm();
        }
    };

    const sendSignUpForm = async () => {
        try {
            setLoading(true);

            const response = await axios.post(
                "http://localhost/api/v1/auth/sign_up",
                signUpForm,
                {
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    timeout: 500,
                }
            );

            if (response.status != 201) {
                throw new Error(
                    "Network response was not ok " + response.statusText
                );
            }

            const data = await response.data;
            console.log("Success:", data);
            navigate("/sign-in");
        } catch (error) {
            setLoading(false);
            console.error("Error:", error);
        }
    };

    return (
        <form className={classes.sign_up_form} onSubmit={handleSubmit}>
            <Input
                type="email"
                value={signUpForm.email}
                placeholder="Email"
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                    setSignUpForm((prev) => ({
                        ...prev,
                        email: event.target.value,
                    }))
                }
                required
            />
            <Input
                type="text"
                value={signUpForm.username}
                placeholder="Username"
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                    setSignUpForm((prev) => ({
                        ...prev,
                        username: event.target.value,
                    }))
                }
                required
            />
            <Input
                type="password"
                value={signUpForm.password}
                placeholder="Password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                    setSignUpForm((prev) => ({
                        ...prev,
                        password: event.target.value,
                    }))
                }
                required
            />
            <Button type="submit" disabled={!isValid || isLoading}>
                Sign Up
            </Button>
        </form>
    );
};

export default SignUpForm;
