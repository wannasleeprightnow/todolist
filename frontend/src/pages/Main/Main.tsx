import { useState, useEffect } from "react";
import ListHeader from "../../components/ListHeader/ListHeader.tsx";
import ListItem from "../../components/ListItem/ListItem.tsx";
import Header from "../../components/Header/Header.tsx";
import Button from "../../components/Button/Button.tsx";
import Pagination from "../../components/Pagination/Pagination.tsx";
import classes from "./Main.module.css";

export default function Main() {
  return (
    <div className={classes.main}>
      <Header></Header>
      <Button className={classes.add}>Add</Button>
      <ul className={classes.ul}>
        <ListHeader />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        <ListItem number="1" taskTitle="test" taskStatus="In progress" />
        
      </ul>
      <Pagination />
    </div>
  );
}
