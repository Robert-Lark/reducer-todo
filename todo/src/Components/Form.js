import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
	logo: {
		color: "#FFF5EE",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "flex-end",
		height: "90vh",
	},
	logoText: {
		color: "#FFF5EE",
		textAlign: "center",
		width: "75%",
		marginRight: "3%",
		height: "15%",
		fontFamily: "Roboto",
	},
	add: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "80%",
		height: "10%",
	},
	addInput: {
		width: "50%",
		borderRadius: "20px",
		backgroundColor: "white",
	},
	button: {
		marginTop: "20px",
		borderRadius: "20px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "30%",
	},
	clearButton: {
		marginTop: "20px",
		borderRadius: "20px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "30%",
	},
}));

function Form(props) {
    const [state, dispatch] = useReducer(classReducer, initialState);
    	const classes = useStyles();
    return (
			<Grid item className={classes.logo}>
				<h1 className={classes.logoText}>ALBUMS I NEED TO HEAR</h1>
				<form className={classes.add} noValidate autoComplete="off">
					<TextField
						className={classes.addInput}
						placeholder="ALBUM NAME HERE"
					/>
					<Button className={classes.button} variant="contained">
						Submit
					</Button>
					<Button className={classes.clearButton} variant="contained">
						Clear Listened
					</Button>
				</form>
			</Grid>
		);
}

export default Form;