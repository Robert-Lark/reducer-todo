import React from "react";
import { ACTIONS } from "../Actions";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "../UI/Styles";
import Grid from "@material-ui/core/Grid";

export function newTodo(name, url) {
    return { id: Date.now(), item: name, completed: false };
}

function Todo({ todo, dispatch }) {


    
    const classes = useStyles();
    console.log(todo);
    return (
        <Grid Item className={classes.todoContainer}>
            <Paper variant="secondary" elevation="3" className={classes.artistCard}>
                <img
                    className={todo.completed ? classes.imgHide : classes.img}
                    src={todo.item} onClick={() =>
                        dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
                    } />
            </Paper>
            <button
                className={classes.button}
                onClick={() =>
                    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
                }
            >
                Clear Listened
					</button>
        </Grid>
    );
}

export default Todo;
