import React, {useReducer} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { classReducer, initialState } from "./Reducers";
import AppBackground from "./img/AppBackground.jpg";
const useStyles = makeStyles((theme) => ({
	App: {
		boxSizing: "border-box",
		height: "100vh",
		backgroundImage: `url(${AppBackground})`,
		opacity: "85%",
		display: "flex",
		justifyContent: "flex-end",
	},
	logo: {
		opacity: "100%",
		color: "#FFF5EE",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "flex-end",
		height: "80vh",
	},
	logoText: {
		color: "#FFF5EE",
		textAlign: "center",
		width: "75%",
		marginRight: "3%",
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
}));

function App() {
const [state, dispatch] = useReducer(classReducer, initialState);
	const classes = useStyles();
  return (
		<Grid container className={classes.App}>
			<Grid item className={classes.logo}>
				<h1 className={classes.logoText}>ALBUMS I NEED TO HEAR!</h1>
				<form className={classes.add} noValidate autoComplete="off">
					<TextField
						className={classes.addInput}
						placeholder="Add Album Name Here"
					/>
					<Button className={classes.button} variant="contained">
						Submit
					</Button>
				</form>
			</Grid>
		</Grid>
	);
}

export default App;
