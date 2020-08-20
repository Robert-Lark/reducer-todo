import React, {useReducer} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { classReducer, initialState } from "./Reducers";
import AppBackground from "./img/AppBackground.jpg";
import Form from "./Components/Form"
import Header from "./Components/Header"


const useStyles = makeStyles((theme) => ({
	App: {
		boxSizing: "border-box",
		height: "100vh",
		backgroundImage: `url(${AppBackground})`,
		opacity: "85%",
		display: "flex",
		justifyContent: "flex-end",
	},
}));

function App() {

	const classes = useStyles();
  return (
		<Grid container className={classes.App}>
      <Header />
		<Form/>
		</Grid>
	);
}

export default App;
