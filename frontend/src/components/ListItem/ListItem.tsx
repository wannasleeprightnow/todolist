import { useEffect, useState } from "react";
import Button from "../Button/Button";
import classes from "./ListItem.module.css";
import Input from "../Input/Input";

export default function ListItem({ children, number, taskTitle, taskStatus }) {
  const [text, setText] = useState(taskTitle);
  const [status, setStatus] = useState(taskStatus);

  const handleNewStatus = (event) => {
    setStatus(event.target.value);
  };

  useEffect(() => {
    setText(text);
  }, [text]);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  return (
    <li className={classes.li}>
      <p className={classes.number}>{number}</p>
      <Input
        className={classes.task_title}
        value={text}
        placeholder="Write task"
        onChange={(e) => setText(e.target.value)}
      ></Input>
      <select
        className={classes.status}
        value={status}
        onChange={handleNewStatus}
      >
        <option>Planned</option>
        <option>In progress</option>
        <option>Done</option>
      </select>
      <Button className={classes.delete}>Delete</Button>
    </li>
  );
}
