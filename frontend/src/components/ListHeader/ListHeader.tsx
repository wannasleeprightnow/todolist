import classes from "./ListHeader.module.css";

export default function ListHeader() {
    return (
        <li className={classes.list_header}>
            <p className={classes.header_number}>#</p>
            <p className={classes.header_title}>Title</p>
            <p className={classes.header_status}>Status</p>
        </li>
    );
}
