import React from "react";

import Button from "../Button/Button.jsx";

import classes from "./Header.module.css";

const Header: React.FC = () => {
    return (
        <header className={classes.header}>
            <a className={classes.a}>TODOlist</a>
            <Button className={classes.button}>Log out</Button>
        </header>
    );
};

export default Header;
