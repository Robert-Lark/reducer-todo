const displayReducer = (state = false, action) => {
    switch (action.type) {
			case "TOGGLE_DISPLAY":
				return !state
			default:
				return state;
		}
}

export default displayReducer