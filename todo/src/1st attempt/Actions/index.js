export const toggleClassListened = () => {
    return {
        type: 'STRIKE_THROUGH',
    }

}

export const display = () => {
	return {
		type: "TOGGLE_DISPLAY",
	};
};

export const addAlbum = () => {
    return {
        type: "ADD_ALBUM",
        payload: {}
    }
}