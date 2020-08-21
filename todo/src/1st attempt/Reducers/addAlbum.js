import {addAlbum} from "../Actions"


export const initialState = {
    albumArtist: "Loscil",
    albumName: "Endless Falls",
label: "Kranky",
}

export const addAlbumReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ALBUM":
            return {...state, albumArtist: action.payload, albumName: action.payload, label: action.payload}
            default:
                return state;
    }
}