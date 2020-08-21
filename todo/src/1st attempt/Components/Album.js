import React, { useReducer } from "react";
import imgArray from "../img/imgArray.js";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { toggleClassListened, display } from "../Actions";

const useStyles = makeStyles(() => ({
	container: {
		marginTop: "80px",
		height: "100vh",
		width: "60%",
		display: "flex",
		justifyItems: "space-around",
		justifyContent: "space-around",
	},
	artistCard: {
		width: "200px",
		height: "200px",
	},
	img: {
		width: "200px",
		height: "200px",
	},
	listened: {
		width: "200px",
		height: "200px",
		transition: "opacity 5s",
		opacity: "50%",
	},
}));

const Album = (props) => {
	const dispatch = useDispatch();
	const completed = useSelector((state) => state.listened);
	const classes = useStyles();
	return (
		<Grid container className={classes.container}>
			{imgArray.map((img) => (
				<Grid Item>
					<Paper
						variant="secondary"
						elevation="3"
						className={classes.artistCard}
					>
						<img
							src={img.img}
							className={completed ? classes.listened : classes.img}
							alt="mix"
							onClick={() => dispatch(toggleClassListened())}
						/>
					</Paper>
				</Grid>
			))}
		</Grid>
	);
};

export default Album;
