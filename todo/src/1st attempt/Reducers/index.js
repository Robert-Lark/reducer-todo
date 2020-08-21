
import  listenedReducer  from "./listened";
import displayReducer from "./display"; 
import {combineReducers} from 'redux';

const allReducers = combineReducers({
	listened: listenedReducer,
	display: displayReducer,
});


// export const initialState = {
//     album: "",
//     listened: false,
// id: 1234567890
// };

// export const classReducer = (state, action) => {
// 	switch (action.type) {
// 		case "TOGGLE_CLASS_DARK":
// 			return { ...state, dark: !state.dark };
// 		case "TOGGLE_CLASS_DISPLAY":
// 			return { ...state, Display: !state.Display };
// 		default:
// 			return state; // do nothing, just return previous state unchanged
// 	}
// };

export default allReducers


