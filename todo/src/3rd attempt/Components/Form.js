import React, { useReducer, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Todo from "./Todo";
import { reducer, initialState } from "../Reducers";
import { useStyles } from "../UI/Styles";
import { ACTIONS } from "../Actions";

function Form(props) {
	const [todos, dispatch] = useReducer(reducer, initialState);
	const [name, setName] = useState("");


	function handleSubmit(e) {
		e.preventDefault();
		dispatch({ type: ACTIONS.ADD_TODO, payload: { item: name } });
		setName("");
	}

	function handleClick () {

		dispatch({ type: ACTIONS.DELETE_COMPLETED})
	}

	const classes = useStyles();
	return (
		<Grid container className={classes.Formcontainer}>
			<Grid item className={classes.albumArt}>
				{todos.map((todo) => {
					return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
				})}
			</Grid>
			<Grid item className={classes.logo}>
				<h1 className={classes.logoText}>ALBUMS I NEED TO HEAR</h1>
				<form className={classes.add} onSubmit={handleSubmit}>
					<TextField
						type="text"
						className={classes.addInput}
						placeholder="ARTWORK URL HERE"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

				</form>
				<button
						className={classes.button}
						onClick=
							{handleClick}
	
					>
						Clear Listened
					</button>
			</Grid>
		</Grid>
	);
}

export default Form;
