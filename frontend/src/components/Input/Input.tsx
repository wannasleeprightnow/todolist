import React from "react";

import classes from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ onChange, ...props }) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.currentTarget.blur();
        }
    };

    return (
        <input onChange={onChange} onKeyDown={handleKeyDown} className={classes.input} {...props} />
    );
};

export default Input;
