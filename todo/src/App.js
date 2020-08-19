import React, {useReducer} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { classReducer, initialState } from "./Reducers";
import AppBackground from "./img/AppBackground.jpg";
const useStyles = makeStyles((theme) => ({
	App: {
		boxSizing: "border-box",
		height: "100vh",
		backgroundImage: `url(${AppBackground})`,
		display: "flex",
		justifyContent: "flex-end",

	},
	logo: {
		color: "#FFF5EE",
		display: "flex",
		flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
		height: "75vh",
	},
	logoText: {
		color: "#FFF5EE",
    textAlign: "center",
    width: "75%",
    marginRight: "3%",

	},
}));

function App() {
const [state, dispatch] = useReducer(classReducer, initialState);
	const classes = useStyles();
  return (
		<Grid container className={classes.App}>
			<Grid item className={classes.logo}>
				<h1 className={classes.logoText}>ALBUMS I NEED TO HEAR!</h1>
			</Grid>
		</Grid>
	);
}

export default App;
