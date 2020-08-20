
 const listenedReducer = (state, action) => {
	state = {
		img: "",
		listened: false,
	};
	switch (action.type) {
		case "STRIKE_THROUGH":
			return {...state, img: action.payload, listened: !state.listened};
		default:
			return state;
	}
};


export default listenedReducer