import classes from "./Button.module.css";

export default function Button({ children, isActive, ...props }) {
  return (
    <button
      className={isActive ? `${classes.button_active}` : `${classes.button}`}
      {...props}
    >
      {children}
    </button>
  );
}
