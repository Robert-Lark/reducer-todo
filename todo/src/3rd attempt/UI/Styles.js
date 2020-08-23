import { makeStyles } from "@material-ui/core/styles";
import AppBackground from "../img/AppBackground.jpg";
import headerBackground from "../img/headerBackground.png";

export const useStyles = makeStyles((theme) => ({
	//APP
	App: {
		boxSizing: "border-box",
		height: "100%",
		backgroundImage: `url(${AppBackground})`,
		opacity: "95%",
		display: "flex",
		justifyContent: "flex-end",
	},
	form: {
		width: "100%",
		height: "100%",
	},
	//HEADER
	header: {
		backgroundImage: `url(${headerBackground})`,
	},
	headerText: {
		width: "100vw",
		textAlign: "center",
		color: "WhiteSmoke",
		fontFamily: "Roboto",
	},
	//FORM
	Formcontainer: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-end",
	},
	logo: {
		width: "30%",
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
		height: "10%",
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
		width: "42%",
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
	//TODO
	todoContainer: {
		margin: "20px",
	},
	albumArt: {
		display: "flex",
		justifyItems: "space-around",
		justifyContent: "space-around",
	},
	artistCard: {
		marginTop: "100px",
		width: "200px",
		height: "200px",
	},
	img: {
		width: "200px",
		height: "200px",
	},
	imgHide: {
		transition: "opacity 5s",
		opacity: "20%",
		width: "200px",
		height: "200px",
	},
}));
