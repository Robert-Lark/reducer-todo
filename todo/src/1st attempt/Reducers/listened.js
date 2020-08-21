const listenedReducer = (state = false, action) => {
	switch (action.type) {
		case "STRIKE_THROUGH":
			return !state ;
		default:
			return state;
	}
};

export default listenedReducer;
