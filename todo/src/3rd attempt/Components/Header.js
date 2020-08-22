import React, { useState, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../UI/Styles"
import headerBackground from "../img/headerBackground.png";



function Header(props) {
	const classes = useStyles();
	return (
		<React.Fragment>

				<Appbar color="secondary" className={classes.header}>
					<Toolbar disableGutters>
						<Typography variant="h3" color="primary" className={classes.headerText}>
							What to listen to next:
						</Typography>
					</Toolbar>
				</Appbar>
		</React.Fragment>
	);
}

export default Header;