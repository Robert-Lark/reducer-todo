import React, {useReducer} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { classReducer, initialState } from "./Reducers";
const useStyles = makeStyles((theme) => ({
	containerLight: {
		height: "100%",
		width: "100%",
	},
	containerDark: {
		height: "100%",
		width: "100%",
    backgroundColor: "#353C51",

	},
}));

function App() {
const [state, dispatch] = useReducer(classReducer, initialState);
	const classes = useStyles();
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
