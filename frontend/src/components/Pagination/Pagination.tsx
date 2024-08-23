import React, { useState } from "react";
import Button from "../Button/Button.tsx";
import classes from "./Pagination.module.css";

const Pagination: React.FC = () => {
    const [activePageNumber, setActivePageNumber] = useState(1);

    return (
        <nav className="pagination">
            <Button className={classes.prev_page}>Prev</Button>
            <Button
                onClick={() => setActivePageNumber(1)}
                isActive={activePageNumber === 1}
                className={classes.page_number}
            >
                1
            </Button>
            <Button
                onClick={() => setActivePageNumber(2)}
                isActive={activePageNumber === 2}
                className={classes.page_number}
            >
                2
            </Button>
            <Button
                onClick={() => setActivePageNumber(3)}
                isActive={activePageNumber === 3}
                className={classes.page_number}
            >
                3
            </Button>
            <Button className={classes.next_page}>Next</Button>
        </nav>
    );
};

export default Pagination;
