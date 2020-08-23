import React from "react";
import { useStyles } from "./UI/Styles"
import Grid from "@material-ui/core/Grid";
import Form from "./Components/Form"
import Todo from "./Components/Todo";
import Header from "./Components/Header"
import Album from "./Components/Album"
import { ACTIONS } from "./Actions";




function App() {


	const classes = useStyles();
	return (
		<Grid container className={classes.App}>
			<Header />
			<Grid item className={classes.form}>
				<Form />
			</Grid>
		</Grid>
	);
}

export default App;
