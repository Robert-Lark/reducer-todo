import React, {useReducer} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { classReducer, initialState } from "./Reducers";
import AppBackground from "./img/AppBackground.jpg";
import Form from "./Components/Form"
import Header from "./Components/Header"
import Album from "./Components/Album"


const useStyles = makeStyles((theme) => ({
	App: {
		boxSizing: "border-box",
		height: "100%",
		backgroundImage: `url(${AppBackground})`,
		opacity: "95%",
		display: "flex",
		justifyContent: "flex-end",
	},
	form: {
    margin: "-400px 20px 0px 0px",
    height: '100%',
	},
}));

function App() {

	const classes = useStyles();
  return (
		<Grid container className={classes.App}>
			<Header />
			<Grid item>
				<Album />
			</Grid>
			<Grid item className={classes.form}>
				<Form />
			</Grid>
		</Grid>
	);
}

export default App;
