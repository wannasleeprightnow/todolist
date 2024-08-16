import { useState, useEffect } from "react";
import Header from "../../components/Header/Header.tsx";
import Button from "../../components/Button/Button.tsx";
import classes from "./Main.module.css";

export default function Main () {

	const [text, setText] = useState("");

	useEffect(() => {
		setText(text);
		console.log(text);
	}, [text]);

	return (
	<>
		<Header></Header>
		<ul className={classes.ul}>
		<li className={classes.header_li}>
				<p className={classes.header_number}>#</p>
				<p className={classes.header_title}>Title</p>
				<p className={classes.header_status}>Status</p>
			</li>
			<li className={classes.li}>
				<p className={classes.number}>1</p>
				<input id="task_title" className={classes.task_title} placeholder="Write task" onChange={(e) => {setText(e.target.value)}}></input>
				<select className={classes.status}>
					<option>Planned</option>
					<option>In progress</option>
					<option>Done</option>
				</select>
				<Button className={classes.delete}>Delete</Button>
			</li>
			<li className={classes.li}>
				<p className={classes.number}>2</p>
				<input className={classes.task_title} placeholder="Write task" onChange={(e) => {setText(e.target.value)}}></input>
				<select className={classes.status}>
					<option>Planned</option>
					<option>In progress</option>
					<option>Done</option>
				</select>
				<Button className={classes.delete}>Delete</Button>
			</li>
			<li className={classes.li}>
				<p className={classes.number}>3</p>
				<input className={classes.task_title} placeholder="Write task" onChange={(e) => {setText(e.target.value)}}></input>
				<select className={classes.status}>
					<option>Planned</option>
					<option>In progress</option>
					<option>Done</option>
				</select>
				<Button className={classes.delete}>Delete</Button>
			</li>
			<li className={classes.li}>
				<p className={classes.number}>4</p>
				<input className={classes.task_title} placeholder="Write task" onChange={(e) => {setText(e.target.value)}}></input>
				<select className={classes.status}>
					<option>Planned</option>
					<option>In progress</option>
					<option>Done</option>
				</select>
				<Button className={classes.delete}>Delete</Button>
			</li>
			<li className={classes.li}>
				<p className={classes.number}>5</p>
				<input className={classes.task_title} placeholder="Write task" onChange={(e) => {setText(e.target.value)}}></input>
				<select className={classes.status}>
					<option>Planned</option>
					<option>In progress</option>
					<option>Done</option>
				</select>
				<Button className={classes.delete}>Delete</Button>
			</li>
			<li className={classes.li}>
				<p className={classes.number}>6</p>
				<input className={classes.task_title} placeholder="Write task" onChange={(e) => {setText(e.target.value)}}></input>
				<select className={classes.status}>
					<option>Planned</option>
					<option>In progress</option>
					<option>Done</option>
				</select>
				<Button className={classes.delete}>Delete</Button>
			</li>
			<li className={classes.li}>
				<p className={classes.number}>7</p>
				<input className={classes.task_title} placeholder="Write task" onChange={(e) => {setText(e.target.value)}}></input>
				<select className={classes.status}>
					<option>Planned</option>
					<option>In progress</option>
					<option>Done</option>
				</select>
				<Button className={classes.delete}>Delete</Button>
			</li>
		</ul>
	</>
	)
}