import Button from "../Button/Button.jsx";
import classes from "./Header.module.css";

export default function Header () {


	return (
		<header className={classes.header}>
			<a className={classes.a} >TODOlist</a>
			<Button className={classes.button} >Log out</Button>
		</header>
	)
}