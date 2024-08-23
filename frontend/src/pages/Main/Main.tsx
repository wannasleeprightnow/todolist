import ListHeader from "../../components/ListHeader/ListHeader.tsx";
import ListItem from "../../components/ListItem/ListItem.tsx";
import Header from "../../components/Header/Header.tsx";
import Button from "../../components/Button/Button.tsx";
import Pagination from "../../components/Pagination/Pagination.tsx";
import Status from "../../Status.ts";
import classes from "./Main.module.css";

export default function Main() {
    return (
        <div className={classes.main}>
            <Header></Header>
            <Button className={classes.add}>Add</Button>
            <ul className={classes.ul}>
                <ListHeader />
                <ListItem
                    taskNumber={1}
                    taskTitle="test"
                    taskStatus={Status.InProgress}
                />
                <ListItem
                    taskNumber={1}
                    taskTitle="test"
                    taskStatus={Status.InProgress}
                />
                <ListItem
                    taskNumber={1}
                    taskTitle="test"
                    taskStatus={Status.InProgress}
                />
                <ListItem
                    taskNumber={1}
                    taskTitle="test"
                    taskStatus={Status.InProgress}
                />
                <ListItem
                    taskNumber={1}
                    taskTitle="test"
                    taskStatus={Status.InProgress}
                />
            </ul>
            <Pagination />
        </div>
    );
}
