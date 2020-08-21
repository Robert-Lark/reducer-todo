import React, { useState, useReducer } from "react";
import {addAlbumReducer, initialState} from "../Reducers/addAlbum"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	card: {
		border: "5px double #DCDCDC",
		borderRadius: "20px",
		boxShadow: "0 6px 6px rgba(0,0,0,0.2);",
		width: "30em",
		display: "flex",
		justifyContent: "space-around",
	},
	cardContent: {
		display: "flex",
		justifyContent: "space-around",
	},
	box: {
		display: "flex",
		justifyContent: "space-around",
	},
}));



const AlbumList = (props) => {
	const [state, dispatch] = useReducer(addAlbumReducer, initialState);
    const classes = useStyles();
return (
	<Box className={classes.box}>

			<Card className={classes.card}>
				<CardContent className={classes.cardContent}>
	
				</CardContent>
			</Card>

	</Box>
);}

export default AlbumList