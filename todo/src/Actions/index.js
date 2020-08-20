export const toggleClassListened = (img) => {
    return {
        type: 'STRIKE_THROUGH',
        payload: img
    }

}

export const display = () => {
	return {
		type: "TOGGLE_DISPLAY",
	};
};