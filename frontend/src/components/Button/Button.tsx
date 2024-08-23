import React from "react";

import classes from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isActive?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isActive, ...props }) => {
    return (
        <button
            className={
                isActive ? `${classes.button_active}` : `${classes.button}`
            }
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
