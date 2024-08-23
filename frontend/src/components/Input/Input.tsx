import classes from "./Input.module.css";

export default function Input({ ...props }) {
    const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
            event.target.blur();
        }
    };

    return (
        <input onKeyDown={handleKeyDown} className={classes.input} {...props} />
    );
}
