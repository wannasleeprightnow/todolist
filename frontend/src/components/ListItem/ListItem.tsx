import React, { useEffect, useState } from "react";

import Button from "../Button/Button.tsx";
import Status from "../../Status.ts";

import classes from "./ListItem.module.css";

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    taskNumber: number;
    taskTitle: string;
    taskStatus: Status;
}

const ListItem: React.FC<ListItemProps> = ({
    taskNumber,
    taskTitle,
    taskStatus,
}) => {
    const [text, setText] = useState(taskTitle);
    const [status, setStatus] = useState(taskStatus);

    useEffect(() => {
        setText(text);
    }, [text]);

    useEffect(() => {
        setStatus(status);
    }, [status]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.currentTarget.blur();
        }
    };

    return (
        <li className={classes.li}>
            <p className={classes.number}>{taskNumber}</p>
            <input
                className={classes.task_title}
                onKeyDown={handleKeyDown}
                value={text}
                placeholder="Write task"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setText(event.target.value)
                }
            ></input>
            <select
                className={classes.status}
                value={status}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    setStatus(event.target.value as Status)
                }
            >
                <option value={Status.Planned}>{Status.Planned}</option>
                <option value={Status.InProgress}>{Status.InProgress}</option>
                <option value={Status.Done}>{Status.Done}</option>
            </select>
            <Button className={classes.delete}>Delete</Button>
        </li>
    );
};

export default ListItem;
