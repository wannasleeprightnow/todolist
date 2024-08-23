import React from "react";

import classes from "./ListHeader.module.css";

const ListHeader: React.FC = () => {
    return (
        <li className={classes.list_header}>
            <p className={classes.header_number}>#</p>
            <p className={classes.header_title}>Title</p>
            <p className={classes.header_status}>Status</p>
        </li>
    );
};

export default ListHeader;
