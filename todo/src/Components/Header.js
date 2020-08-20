import React, { useState, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/toolbar";
import Typography from "@material-ui/core/Typography";
import { classReducer, initialState } from "..//Reducers";
import headerBackground from "./headerBackground.png";

const useStyles = makeStyles((theme) => ({
	header: {
		backgroundImage: `url(${headerBackground})`,
	},
	text: {
		width: "100vw",
		textAlign: "center",
		color: "WhiteSmoke",
		fontFamily: "Roboto",
	},
}));

function Header(props) {
	const classes = useStyles();
	return (
		<React.Fragment>

				<Appbar color="secondary" className={classes.header}>
					<Toolbar disableGutters>
						<Typography variant="h3" color="primary" className={classes.text}>
							What to listen to next:
						</Typography>
					</Toolbar>
				</Appbar>
		</React.Fragment>
	);
}

export default Header;